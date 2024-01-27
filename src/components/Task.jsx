"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import toast from "react-hot-toast";
import { deleteTask } from "@/lib/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Loader from "./Loader/Loader";
import { useEffect, useState } from "react";
import TaskAddForm from "./TaskAddForm";
import TaskEditForm from "./TaskEditForm";

const IndTask = ({ task }) => {
  const [isLoading, setIsLoading] = useState(true);

  async function handleDelete() {
    const id = task._id;
    console.log("id :", id);
    await deleteTask(id);
    toast.success("Task Deleted Successfully ", {
      style: {
        border: "1px solid black",
        padding: "16px",
        color: "black",
      },
      iconTheme: {
        primary: "white",
        secondary: "#713200",
      },
    });
  }

  useEffect(() => {
    if (task) {
      setIsLoading(false);
    }
  }, [task]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Card className="h-[250px] w-[250px] relative bg-orange-50 dark:bg-[#836656]">
        <CardHeader>
          <CardTitle className="flex justify-center dark:text-black">
            {task.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="overflow-hidden dark:text-black">
            <p>{task.description}</p>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button
            variant="default"
            size="sm"
            className="absolute bottom-1 right-[67px]"
          >
            <Drawer className="">
              <DrawerTrigger>Edit</DrawerTrigger>
              <DrawerContent className="bg-[#FEDBC5] dark:bg-black">
                <DrawerHeader className="">
                  <DrawerTitle className="p-10 flex justify-center dark:text-[#f0c3a8]">
                    Edit Task Here...
                  </DrawerTitle>
                  <DrawerDescription className="md:flex md:justify-center">
                    <TaskEditForm task={task} />
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose className="mt-[-20px] flex justify-end">
                    <Button variant="default">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="absolute bottom-1 right-1 "
            onClick={handleDelete}
          >
            delete
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default IndTask;
