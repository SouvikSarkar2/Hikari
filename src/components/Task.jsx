"use client";

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
import { redirect } from "next/dist/server/api-utils";

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

  async function handleEdit() {}

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
      <Card className="h-[250px] w-[250px] relative bg-orange-50">
        <CardHeader>
          <CardTitle className="flex justify-center ">{task.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="overflow-hidden">
            <p>{task.description}</p>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button
            variant="default"
            size="sm"
            className="absolute bottom-1 right-[67px]"
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="absolute bottom-1 right-1"
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
