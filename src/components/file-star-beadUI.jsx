"use client";
import { Button, Card, Input, Progress } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { FileUp, Play, RotateCcw, Save, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const FloatingBead = ({ color, x, y, operation }) => (
  <motion.div
    className={`absolute w-10 h-10 rounded-full backdrop-blur-xl bg-opacity-50 shadow-xl cursor-pointer
      ${color} flex items-center justify-center text-white text-sm font-semibold border border-white/30`}
    animate={{
      x: [x - 15, x + 15],
      y: [y - 15, y + 15],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
    whileHover={{ scale: 1.3 }}
  >
    {operation.slice(0, 2)}
  </motion.div>
);

const ProcessStep = ({ step, isActive, onSelect }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`px-4 py-2 rounded-lg cursor-pointer transition-all
      ${isActive ? "bg-white/20 shadow-lg" : "bg-white/5"}
      border border-white/20`}
    onClick={onSelect}
  >
    <h3 className="text-white font-semibold">{step.name}</h3>
    {isActive && (
      <p className="text-gray-300 text-sm mt-1">{step.description}</p>
    )}
  </motion.div>
);

const FilestarBeadUI = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [query, setQuery] = useState("");
  const [activeStep, setActiveStep] = useState(null);
  const [steps, setSteps] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const floatingBeads = [
    { color: "bg-black", operation: "Crop", x: 100, y: 100 },
    { color: "bg-gray-500", operation: "Grayscale", x: 200, y: 150 },
    { color: "bg-blue-500", operation: "Convert", x: 300, y: 100 },
    { color: "bg-green-500", operation: "Compress", x: 150, y: 200 },
    { color: "bg-purple-500", operation: "Filter", x: 250, y: 250 },
    { color: "bg-red-500", operation: "Resize", x: 350, y: 200 },
  ];

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setShowPreview(true);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-indigo-400", "bg-white/10");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-indigo-400", "bg-white/10");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setShowPreview(true);
    }
  };

  const handleQuerySubmit = () => {
    if (!query) return;

    setIsProcessing(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-6 flex items-center justify-center">
      <Card className="p-10 shadow-2xl relative bg-white/10 backdrop-blur-lg rounded-xl max-w-4xl w-full flex flex-col">
        {/* Floating Beads */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {floatingBeads.map((bead, index) => (
            <FloatingBead key={index} {...bead} />
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-5xl font-extrabold text-white tracking-wide mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href={'/'}>FileStar*</Link>
          </motion.h1>
          <motion.p
            className="text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Transform your files effortlessly with AI
          </motion.p>
        </div>

        {/* File Upload */}
        <div className="relative z-10 mb-6">
          <motion.div
            className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center transition-all
              hover:border-indigo-400 hover:bg-white/10"
            whileHover={{ scale: 1.03 }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileUp className="w-14 h-14 mx-auto mb-3 text-gray-200" />
              <p className="text-gray-300">
                {selectedFile
                  ? selectedFile.name
                  : "Drop or click to upload your file"}
              </p>
            </label>
          </motion.div>
        </div>

        {/* Command Input */}
        <div className="mb-6 relative flex items-center md:gap-5 gap-2">
          <Input
            type="text"
            placeholder="Describe what you want to do..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-white border-zinc-400 border rounded-full py-2 px-3"
            size="lg"
          />
          {isProcessing && (
            <Progress
              size="sm"
              isIndeterminate
              color="secondary"
              className="mt-2"
            />
          )}
          <Button
            isIconOnly
            color="primary"
            variant="flat"
            onPress={handleQuerySubmit}
            className="md:w-12 md:h-12 rounded-full md:bg-white flex items-center justify-center"
          >
            <Play size={23} className="md:text-black text-white" />
          </Button>
        </div>

        {/* Processing Steps */}
        <AnimatePresence>
          {steps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2 mt-4"
            >
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  step={step}
                  isActive={activeStep === index}
                  onSelect={() => setActiveStep(index)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        {selectedFile && (
          <motion.div
            className="flex justify-end gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Button
              color="default"
              variant="flat"
              className="text-white"
              startContent={<RotateCcw className="w-4 h-4 text-white" />}
              onPress={() => {
                setSelectedFile(null);
                setSteps([]);
                setQuery("");
              }}
            >
              Reset
            </Button>
            <Button
              color="secondary"
              className="text-white"
              variant="flat"
              startContent={<Settings className="w-4 h-4 text-white" />}
            >
              Settings
            </Button>
            <Button
              className="text-white"
              color="primary"
              variant="solid"
              startContent={<Save className="w-4 h-4 text-white" />}
            >
              Save
            </Button>
          </motion.div>
        )}
      </Card>
    </div>
  );
};

export default FilestarBeadUI;
