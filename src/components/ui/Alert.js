import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

import { useAlertContext } from "../../context/alert-context";

export default function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={
            isSuccess ? "var(--color-success-200)" : "var(--color-error-200)"
          }
          color={isSuccess ? "var(--color-success)" : "var(--color-error)"}
          border={
            isSuccess
              ? "2px solid var(--color-success)"
              : "2px solid var(--color-error)"
          }
        >
          <AlertDialogHeader
            fontSize="lg"
            fontWeight="bold"
          >
            {isSuccess
              ? "All good!"
              : "(Emulating server error. Press the form submit until you get success)"}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              colorScheme="red"
              onClick={onClose}
              ml={3}
            >
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
