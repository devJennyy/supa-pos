"use client";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "../ui/section-title";
import { Button } from "./button";
import { LuPackagePlus } from "react-icons/lu";
import { VscSettings } from "react-icons/vsc";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { supabase } from "@/app/supabaseClient";
import { motion, Reorder } from "framer-motion";
import { CheckCircle2Icon, AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";

interface Props {
  showAddButton?: boolean;
}

const Categories = ({ showAddButton }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [showPicker, setShowPicker] = useState(false);
  const [categories, setCategories] = useState<
    { id: string; name: string; icon: string }[]
  >([]);
  const [newCategory, setNewCategory] = useState({ name: "", icon: "" });
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const emojiRegex = /^(?:\p{Emoji_Presentation}|\p{Emoji}\uFE0F)$/u;

  const [tempCategories, setTempCategories] = useState(categories);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showReorderDialog, setShowReorderDialog] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select("id, name, icon")
        .order("created_at", { ascending: true });
      if (!error) setCategories(data || []);
    };
    fetchCategories();
  }, []);

  const saveCategory = async () => {
    if (!newCategory.name.trim()) {
      setAlert({ type: "error", message: "Please enter a category name." });
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("categories").insert([
      {
        name: newCategory.name,
        icon: newCategory.icon,
        user_id: user?.id || null,
      },
    ]);

    if (error) {
      setAlert({ type: "error", message: "Failed to add category." });
      return;
    }

    setCategories((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: newCategory.name,
        icon: newCategory.icon,
      },
    ]);
    setNewCategory({ name: "", icon: "" });

    setIsAddModalOpen(false);
    setAlert({ type: "success", message: "Category added successfully!" });
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (!error) setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const openReorderDialog = () => {
    setTempCategories([...categories]);
    setShowReorderDialog(true);
  };

  const doneReorder = () => {
    setCategories(tempCategories);
    setShowReorderDialog(false);
  };

  return (
    <div className="flex flex-col"> 
      <div className="flex items-center justify-between">
        <SectionTitle title="Categories" />

        <div className="flex gap-2 items-center">
          {/* Add Button */}
          {showAddButton && (
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <LuPackagePlus />
                  <p className="flex gap-1">Add <span className="hidden lg:block">Categories</span></p>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-left">
                    Add New Category
                  </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 !mt-2">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input
                      id="name-1"
                      name="name"
                      placeholder="Add category name"
                      value={newCategory.name}
                      onChange={(e) =>
                        setNewCategory((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>

                  <div className="grid gap-3">
                    <label htmlFor="icon-1">Emoji / Icon</label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="icon-1"
                        name="icon"
                        value={newCategory.icon}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (!value || emojiRegex.test(value)) {
                            setNewCategory((prev) => ({
                              ...prev,
                              icon: value,
                            }));
                          }
                        }}
                        placeholder="Select / add emoji"
                      />

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowPicker((prev) => !prev)}
                        className="p-2"
                      >
                        <p className="text-lg !mb-1">
                          {newCategory.icon || "🍔"}
                        </p>
                      </Button>
                    </div>
                    {showPicker && (
                      <div className="absolute right-5 top-[14.2rem] z-50 max-w-[90vw] bg-background rounded-lg shadow-lg border p-3">
                        <div className="flex justify-between items-center">
                          <p className="text-sm">Choose emoji</p>
                          <button
                            className="text-sm px-2 py-1 rounded hover:bg-muted !mb-2"
                            onClick={() => setShowPicker(false)}
                          >
                            ✕
                          </button>
                        </div>
                        <EmojiPicker
                          width="100%"
                          height={350}
                          theme={Theme.LIGHT}
                          onEmojiClick={(emojiData) =>
                            setNewCategory((prev) => ({
                              ...prev,
                              icon: emojiData.emoji,
                            }))
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>

                <DialogFooter className="lg:!mt-4 !mt-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>

                  <Button
                    type="button"
                    onClick={async () => {
                      await saveCategory();
                    }}
                  >
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}

          {/* Alert Popup */}
          {alert && (
            <div className="fixed bottom-5 right-5 z-50 w-full lg:max-w-sm max-w-xs bg-secondaryBackground rounded-lg">
              <Alert className="bg-primary/10 border border-primary rounded-lg shadow-lg p-4">
                {alert.type === "success" ? (
                  <CheckCircle2Icon className="h-5 w-5" />
                ) : (
                  <AlertCircleIcon className="h-5 w-5" />
                )}
                <AlertTitle>
                  {alert.type === "success" ? "Success!" : "Error!"}
                </AlertTitle>
                <AlertDescription>{alert.message}</AlertDescription>
              </Alert>
            </div>
          )}

          {/* Edit Button */}
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <VscSettings />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem
                  onClick={openReorderDialog}
                  className="cursor-pointer"
                >
                  Reorder
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setIsEditing(true)}
                  className="text-red-500 cursor-pointer"
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {isEditing && (
            <>
            <Button
              onClick={() => setIsEditing(false)}
               className="hidden lg:block"
            >
              Done Editing
            </Button>

            <Button
              onClick={() => setIsEditing(false)}
              className="lg:hidden"
            >
              <FaCheck size={12}/>
            </Button>
            </>
          )}
        </div>
      </div>

      {/* Reorder Modal */}
      {showReorderDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-md p-5 max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Reorder Categories</h2>
              <button
                onClick={() => setShowReorderDialog(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>

            <div
              className={`scrollbar-hidden transition-default`}
              style={{
                maxHeight: showAll ? "50vh" : "260px",
              }}
            >
              <Reorder.Group
                axis="y"
                values={tempCategories}
                onReorder={setTempCategories}
                className="flex flex-col gap-2"
              >
                {tempCategories.map((item) => (
                  <Reorder.Item
                    key={item.id}
                    value={item}
                    className="px-4 py-2 border rounded-lg bg-input/60 cursor-grab"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <RxHamburgerMenu size={18} className="text-bg-gray-800" />
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>

            {tempCategories.length > 5 && !showAll && (
              <Button
                variant="outline"
                onClick={() => setShowAll(true)}
                className="mt-5"
              >
                Show More
              </Button>
            )}

            <div className="mt-4 flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setShowReorderDialog(false)}
              >
                Cancel
              </Button>
              <Button onClick={doneReorder}>Done Editing</Button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Item */}
      <div
        ref={carouselRef}
        className="flex lg:gap-5 gap-3 lg:overflow-x-hidden overflow-x-auto py-4 custom-scrollbar cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {categories.map((item, index) => (
          <motion.div
            key={item.id}
            animate={
              isEditing
                ? {
                    rotate: [0, -2, 2, -2, 0],
                    transition: { repeat: Infinity, duration: 0.6 },
                  }
                : { rotate: 0 }
            }
            className={`relative flex-shrink-0 lg:h-25 lg:px-8 px-5 h-20 rounded-xl border flex flex-col justify-center items-center lg:gap-2 gap-1 hover:bg-input dark:hover:bg-input hover:text-primary text-secondary transition-default
              ${
                activeIndex === index
                  ? "bg-input/70 text-foreground dark:border-border border-borderBrand/70"
                  : "bg-white dark:bg-transparent hover:dark:border-border hover:border-borderBrand/70"
              }`}
            onClick={() => !isEditing && setActiveIndex(index)}
          >
            {isEditing && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    onClick={() => setDeleteId(item.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md"
                  >
                    ✕
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Category</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete this category? This action
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => deleteId && handleDelete(deleteId)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
            <p
              className={`${
                index === activeIndex ? "text-primary" : "text-secondary"
              } lg:text-2xl text-lg`}
            >
              {item.icon}
            </p>
            <p
              className={`lg:text-sm text-xs ${
                activeIndex === index
                  ? "text-foreground font-semibold"
                  : "text-secondary"
              }`}
            >
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
