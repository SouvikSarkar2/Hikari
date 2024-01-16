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

const IndTask = ({ task }) => {
  return (
    <>
      <Card className="h-[250px] w-[250px] relative">
        <CardHeader>
          <CardTitle className="flex justify-center ">{task.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="overflow-hidden">
            <p>{task.description}</p>
          </CardDescription>
        </CardContent>
        <CardFooter>
          <form action={deleteTask}>
            <input type="hidden" name="id" value={task.id} />
            <Button
              variant="destructive"
              size="sm"
              className="absolute bottom-1 right-1"
            >
              delete
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
};

export default IndTask;
