"use client";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Basket from "@/components/basket";

const BasketInterception = () => {
  const router = useRouter();

  const onDismiss = () => {
    router.back();
  };

  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onDismiss();
        }
      }}
    >
      <DialogContent className="h-4/5 w-full max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
          <DialogDescription>
            <p>Contents of your basket</p>
          </DialogDescription>
        </DialogHeader>

        <Basket />
      </DialogContent>
    </Dialog>
  );
};

export default BasketInterception;
