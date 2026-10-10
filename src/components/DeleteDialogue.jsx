"use client";

import {AlertDialog, Button} from "@heroui/react";
import { Trash } from "lucide-react";

export function DeleteDialogue({destination}) {
      const {
    _id,
    destinationName,
   
  } = destination;
  const handleDelete =async() =>{
    const res = await fetch(`http://localhost:5000/destination/${_id}`,{
        method: 'DELETE',
        headers:{
           "content-type":"application/json"
        }

    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <AlertDialog>
      <Button className="rounded-none" variant="outline">Cancle</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <Trash className="text-red-500"></Trash>
              <AlertDialog.Heading>Delete {destinationName} destination?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently <span className="text-red-500">delete</span> <strong className="text-cyan-600">{destinationName}</strong> destination and its all details.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}