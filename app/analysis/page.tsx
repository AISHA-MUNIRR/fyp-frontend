"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Share, Eye, Brain, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ScoreGauge } from "@/components/score-gauge"

export default function AnalysisPage() {
  const analysisData = {
    overallScore: 87,
    confidence: 89,
    eyeContact: 82,
    communication: 91,
    technicalSkills: 85,
    bodyLanguage: 88,
    speechClarity: 86,
  }

  const insights = [
    {
      category: "Strengths",
      items: [
        "Excellent posture throughout",
        "Clear and articulate speech",
        "Good eye contact with camera",
        "Confident body language",
      ],
    },
    {
      category: "Areas for Improvement",
      items: [
        "Reduce filler words (um, uh)",
        "Use more hand gestures",
        "Smile more frequently",
        "Vary speech pace for emphasis",
      ],
    },
  ]

  const detailedMetrics = [
    { label: "Speech Clarity", score: analysisData.speechClarity, description: "Clear pronunciation and articulation" },
    { label: "Eye Contact", score: analysisData.eyeContact, description: "Maintained good camera eye contact" },
    { label: "Body Language", score: analysisData.bodyLanguage, description: "Professional posture and gestures" },
    { label: "Confidence Level", score: analysisData.confidence, description: "Demonstrated self-assurance" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-800/30 animate-gradient opacity-50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gray-700/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <Link href="/dashboard">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex gap-3">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800/50 bg-transparent">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 border border-gray-600">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <Badge className="mb-4 bg-gray-700/50 text-gray-300 border-gray-600">
            <CheckCircle className="w-4 h-4 mr-2" />
            Analysis Complete
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Interview Performance Analysis
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI-powered analysis of your interview performance with actionable insights
          </p>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Overall Performance Score</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gray-800 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="text-center"
                    >
                      <div className="text-5xl font-bold text-white mb-2">{analysisData.overallScore}%</div>
                      <div className="text-gray-300 text-sm">Excellent</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Key Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ScoreGauge title="Confidence Level" score={analysisData.confidence} color="gray" />
            <ScoreGauge title="Eye Contact" score={analysisData.eyeContact} color="gray" />
            <ScoreGauge title="Communication" score={analysisData.communication} color="gray" />
            <ScoreGauge title="Technical Skills" score={analysisData.technicalSkills} color="gray" />
          </div>
        </motion.div>

        {/* Detailed Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Detailed Performance Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {detailedMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white font-medium">{metric.label}</span>
                        <p className="text-sm text-gray-400">{metric.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-white">{metric.score}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-gray-500 to-gray-700 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.score}%` }}
                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI-Powered Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.category}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      {index === 0 ? (
                        <TrendingUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-400" />
                      )}
                      {insight.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {insight.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 + index * 0.2 + itemIndex * 0.1 }}
                          className="text-gray-300 flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/upload">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-lg px-8 py-4 hover:scale-105 transition-all duration-300 border border-gray-600"
              >
                Upload Another Video
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800/50 text-lg px-8 py-4 bg-transparent hover:scale-105 transition-all duration-300"
              >
                View Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
