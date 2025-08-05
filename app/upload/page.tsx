"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Upload, ArrowLeft, User, Mail, Video, Brain, Eye, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

export default function UploadPage() {
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  const [isProcessing, setIsProcessing] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [processingStep, setProcessingStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const processingSteps = [
    { text: "Processing your interview...", icon: Video },
    { text: "Analyzing gestures and eye contact...", icon: Eye },
    { text: "Generating feedback...", icon: Brain },
    { text: "Analysis complete!", icon: CheckCircle },
  ]

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/")
    }
  }, [isLoggedIn, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setUploadProgress(0)
    setProcessingStep(0)

    // Simulate upload and processing with steps
    const totalSteps = processingSteps.length
    const stepDuration = 1250 // ~5 seconds total

    for (let step = 0; step < totalSteps; step++) {
      setProcessingStep(step)

      // Animate progress for each step
      const stepProgress = ((step + 1) / totalSteps) * 100
      const startProgress = (step / totalSteps) * 100

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const nextProgress = prev + 2
          if (nextProgress >= stepProgress) {
            clearInterval(interval)
            return stepProgress
          }
          return nextProgress
        })
      }, stepDuration / 50)

      await new Promise((resolve) => setTimeout(resolve, stepDuration))
    }

    // Redirect to dashboard after completion
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-800/30 animate-gradient opacity-50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gray-700/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Navigation */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Upload Your Interview Video
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upload your interview recording and get detailed AI-powered analysis of your performance
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Video className="w-5 h-5" />
                Interview Analysis Upload
              </CardTitle>
              <CardDescription className="text-gray-400">
                Fill in your details and upload your interview video for AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name" className="text-gray-300">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-gray-500 transition-all duration-300"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Video Upload */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <Label className="text-gray-300">Interview Video</Label>
                  {!isProcessing ? (
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center hover:border-gray-500 transition-all duration-300 cursor-pointer hover:bg-gray-800/30">
                      <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-300 text-lg mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">MP4, MOV, AVI up to 100MB</p>
                      <p className="text-xs text-gray-600 mt-2">Recommended: 30-60 seconds for best analysis</p>
                    </div>
                  ) : (
                    <div className="bg-gray-800/50 rounded-lg p-8 text-center">
                      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="mb-6">
                        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center mb-4">
                          {React.createElement(processingSteps[processingStep].icon, {
                            className: "w-10 h-10 text-white",
                          })}
                        </div>
                      </motion.div>
                      <motion.h3
                        key={processingStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-xl mb-2 font-semibold"
                      >
                        {processingSteps[processingStep].text}
                      </motion.h3>
                      <p className="text-gray-400 mb-6">Our AI is analyzing your video for insights</p>
                      <Progress value={uploadProgress} className="h-3 mb-4" />
                      <p className="text-sm text-gray-500">{Math.round(uploadProgress)}% complete</p>

                      {/* Processing steps indicator */}
                      <div className="flex justify-center mt-6 space-x-2">
                        {processingSteps.map((step, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index <= processingStep ? "bg-gray-400" : "bg-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {!isProcessing && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white py-3 hover:scale-105 transition-all duration-300 border border-gray-600"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Upload and Analyze
                    </Button>
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
