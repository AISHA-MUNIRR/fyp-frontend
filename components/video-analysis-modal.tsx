"use client"

import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Eye, Brain, TrendingUp } from "lucide-react"
import { ScoreGauge } from "@/components/score-gauge"

interface VideoAnalysisModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function VideoAnalysisModal({ open, onOpenChange }: VideoAnalysisModalProps) {
  const analysisData = {
    overallScore: 87,
    eyeContact: 82,
    bodyLanguage: 91,
    speechClarity: 85,
    confidence: 89,
    gestures: 78,
  }

  const insights = [
    { category: "Strengths", items: ["Excellent posture", "Clear speech", "Good eye contact"] },
    { category: "Areas for Improvement", items: ["Reduce filler words", "More hand gestures", "Smile more often"] },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            AI Interview Analysis Results
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Video Preview */}
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Play className="w-5 h-5" />
                Sample Interview Video
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4 border border-gray-700">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-300">Sample Interview Recording</p>
                  <p className="text-sm text-gray-500">Duration: 2:34</p>
                </div>
              </div>
              <Badge className="bg-gray-700/50 text-gray-300 border-gray-600">Analysis Complete</Badge>
            </CardContent>
          </Card>

          {/* Score Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <ScoreGauge title="Overall Performance" score={analysisData.overallScore} color="gray" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <ScoreGauge title="Eye Contact" score={analysisData.eyeContact} color="gray" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <ScoreGauge title="Body Language" score={analysisData.bodyLanguage} color="gray" />
            </motion.div>
          </div>

          {/* Detailed Metrics */}
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Detailed Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Speech Clarity</span>
                    <span className="text-white font-semibold">{analysisData.speechClarity}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-gray-500 to-gray-700 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${analysisData.speechClarity}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Confidence Level</span>
                    <span className="text-white font-semibold">{analysisData.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${analysisData.confidence}%` }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Gesture Usage</span>
                    <span className="text-white font-semibold">{analysisData.gestures}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-gray-400 to-gray-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${analysisData.gestures}%` }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.category}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
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
                    <ul className="space-y-2">
                      {insight.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 hover:scale-105 transition-all duration-300 border border-gray-600">
              Get Full Analysis
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 bg-transparent"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
