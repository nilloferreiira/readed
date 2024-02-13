"use client";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

interface deleteBook {
  handleDeleteBook: () => void
}

export function AlertDeleteDialog({ handleDeleteBook }: deleteBook) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="bg-customRed shadow-lg shadow-red-500/20 text-fontWhite opacity-80 py-3 px-6  rounded-lg  min-w-32  hover:opacity-100 transition-all outline-none">
          Apagar
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Você tem certeza?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            Essa ação não pode ser desfeita. Isso vai apagar permanentemente
            este livro da sua biblioteca
          </AlertDialog.Description>
          <div className="flex gap-6 justify-end">
            <AlertDialog.Cancel asChild>
              <button className="bg-blue-950/80 text-fontWhite opacity-100 py-2 px-4  rounded-lg  min-w-32  hover:bg-blue-950 transition-all outline-none">
                Não
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button onClick={handleDeleteBook} className="bg-customRed shadow-lg shadow-red-500/20 text-fontWhite  py-2 px-4  rounded-lg  min-w-32  hover:bg-red-600 transition-all outline-none">
                Sim
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
