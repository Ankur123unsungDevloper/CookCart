"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useFoodProfileImage } from "@/hooks/use-food-profile-image";


export const FoodProfileImage = () => {

    const isOpen = useFoodProfileImage((store) => store.isOpen);
    const onClose = useFoodProfileImage((store) => store.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Hi</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};