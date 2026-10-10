"use client";


import {Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField,Select} from "@heroui/react";
import { Mail, Pencil } from "lucide-react";
import { toast } from "react-toastify";

export function EditModal({destination}) {
     const {
    _id,
    departureDate,
    imageUrl,
    category,
    destinationName,
    country,
    duration,
    price,
    description,
  } = destination;

     const onSubmit = async(e) =>{
            e.preventDefault();
    
            const fromData = new FormData(e.currentTarget);
            const destination = Object.fromEntries(fromData.entries())
            console.log(destination)

            const res=await fetch(`http://localhost:5000/destination/${_id}`,{
              method: 'PATCH',
              headers:{
                'content-type':'application/json'
              },   
              body:JSON.stringify(destination)
            })
            const data =await res.json()
            console.log(data);
            toast.success('Successfully Edited  Destination Data');
            
        } 

  return (
    <Modal className="w-4xl">
      <Button
          size="sm"
          variant="outline"
          radius="sm"
          startContent={<Pencil size={15} />}
          className="border-base-300 rounded-none bg-base-100 font-medium">
          Edit
        </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="lg:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
            

            </Modal.Header>
            <Modal.Body className="p-3">
              <Surface variant="default">
                 <form
                            onSubmit={onSubmit}
                            className="p-10 card w-full space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {/* Destination Name */}
                              <div className="md:col-span-2">
                                <TextField 
                                defaultValue={destinationName}
                                name="destinationName" isRequired>
                                  <Label>Destination Name</Label>
                                  <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Country */}
                              <TextField defaultValue={country} name="country" isRequired>
                                <Label>Country</Label>
                                <Input placeholder="Indonesia" className="rounded-2xl" />
                                <FieldError />
                              </TextField>
                
                              {/* Category - Updated Select Component */}
                              <div>
                                <Select
                                defaultValue={category}
                                  name="category"
                                  isRequired
                                  className="w-full"
                                  placeholder="Select category"
                                >
                                  <Label>Category</Label>
                                  <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                  </Select.Trigger>
                                  <Select.Popover>
                                    <ListBox>
                                      <ListBox.Item id="Beach" textValue="Beach">
                                        Beach
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Mountain" textValue="Mountain">
                                        Mountain
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="City" textValue="City">
                                        City
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Adventure" textValue="Adventure">
                                        Adventure
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Cultural" textValue="Cultural">
                                        Cultural
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                      <ListBox.Item id="Luxury" textValue="Luxury">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                      </ListBox.Item>
                                    </ListBox>
                                  </Select.Popover>
                                </Select>
                              </div>
                
                              {/* Price */}
                              <TextField defaultValue={price} name="price" type="number" isRequired>
                                <Label>Price (USD)</Label>
                                <Input
                                  type="number"
                                  placeholder="1299"
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Duration */}
                              <TextField defaultValue={duration} name="duration" isRequired>
                                <Label>Duration</Label>
                                <Input
                                  placeholder="7 Days / 6 Nights"
                                  className="rounded-2xl"
                                />
                                <FieldError />
                              </TextField>
                
                              {/* Departure Date */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                                  <Label>Departure Date</Label>
                                  <Input type="date" className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Image URL - Removed preview */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                                  <Label>Image URL</Label>
                                  <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              {/* Description */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={description} name="description" isRequired>
                                  <Label>Description</Label>
                                  <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                            </div>
                
                            {/* Buttons */}
                
                            <Modal.Footer>
                            <Button type="submit" slot="close">Save</Button>
                            </Modal.Footer>
                          </form>
              </Surface>
             
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}