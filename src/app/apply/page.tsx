"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, ArrowLeft, Loader2, PartyPopper } from "lucide-react"

interface LoanApplication {
  loanAmount: string
  loanPurpose: string
  loanTerm: string
  monthlyIncome: string
  employmentLength: string
  creditScore: string
  existingDebts: string
  collateral: string
  additionalInfo: string
}

interface User {
  email: string
  name: string
  firstName?: string
  lastName?: string
  phone?: string
}

export default function LoanApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [user, setUser] = useState<User | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const [applicationData, setApplicationData] = useState<LoanApplication>({
    loanAmount: "",
    loanPurpose: "",
    loanTerm: "",
    monthlyIncome: "",
    employmentLength: "",
    creditScore: "",
    existingDebts: "",
    collateral: "",
    additionalInfo: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const totalSteps = user ? 4 : 5
  const progressPercentage = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof LoanApplication, value: string) => {
    setApplicationData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!applicationData.loanAmount) newErrors.loanAmount = "Loan amount is required"
      if (!applicationData.loanPurpose) newErrors.loanPurpose = "Loan purpose is required"
      if (!applicationData.loanTerm) newErrors.loanTerm = "Loan term is required"
    }

    if (step === (user ? 2 : 3)) {
      if (!applicationData.monthlyIncome) newErrors.monthlyIncome = "Monthly income is required"
      if (!applicationData.employmentLength) newErrors.employmentLength = "Employment length is required"
      if (!applicationData.creditScore) newErrors.creditScore = "Credit score range is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const submitApplication = async () => {
    setIsProcessing(true)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Simulate approval
    setIsApproved(true)
    setIsProcessing(false)

    // Add loan to user's account
    const loanData = {
      id: `LN-${Date.now()}`,
      type: applicationData.loanPurpose,
      amount: Number.parseFloat(applicationData.loanAmount),
      term: Number.parseInt(applicationData.loanTerm),
      status: "approved",
      approvalDate: new Date().toISOString(),
      monthlyPayment: calculateMonthlyPayment(),
    }

    const existingLoans = JSON.parse(localStorage.getItem("userLoans") || "[]")
    existingLoans.push(loanData)
    localStorage.setItem("userLoans", JSON.stringify(existingLoans))

    // Simulate account crediting after 2 more seconds
    setTimeout(() => {
      setCurrentStep(totalSteps + 1)
    }, 2000)
  }

  const calculateMonthlyPayment = () => {
    const principal = Number.parseFloat(applicationData.loanAmount)
    const rate = 0.045 / 12 // 4.5% annual rate
    const payments = Number.parseInt(applicationData.loanTerm)

    const monthlyPayment = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1)

    return Math.round(monthlyPayment * 100) / 100
  }

  const renderStepContent = () => {
    if (isProcessing) {
      return (
        <div className="text-center py-12">
          <Loader2 className="h-16 w-16 animate-spin mx-auto mb-4 text-blue-900" />
          <h3 className="text-xl font-semibold mb-2">Processing Your Application</h3>
          <p className="text-gray-600">Please wait while we review your loan application...</p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Verifying personal information</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Checking credit score</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin text-blue-900" />
              <span className="text-sm">Calculating loan terms</span>
            </div>
          </div>
        </div>
      )
    }

    if (isApproved && currentStep === totalSteps + 1) {
      return (
        <div className="text-center py-12">
          <PartyPopper className="h-16 w-16 mx-auto mb-4 text-green-500" />
          <h3 className="text-2xl font-bold mb-2 text-green-600">Congratulations! Loan Approved!</h3>
          <p className="text-gray-600 mb-6">
            Your loan has been approved and funds have been credited to your account.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-gray-600">Loan Amount</p>
                <p className="text-lg font-semibold">
                  ${Number.parseFloat(applicationData.loanAmount).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Payment</p>
                <p className="text-lg font-semibold">${calculateMonthlyPayment().toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Interest Rate</p>
                <p className="text-lg font-semibold">4.5% APR</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Loan Term</p>
                <p className="text-lg font-semibold">{applicationData.loanTerm} months</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => router.push("/dashboard")}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white"
            >
              Go to Dashboard
            </Button>
            <Button variant="outline" onClick={() => router.push("/apply")} className="w-full">
              Apply for Another Loan
            </Button>
          </div>
        </div>
      )
    }

    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Loan Details</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount *</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    placeholder="25000"
                    value={applicationData.loanAmount}
                    onChange={(e) => handleInputChange("loanAmount", e.target.value)}
                    className={errors.loanAmount ? "border-red-500" : ""}
                  />
                  {errors.loanAmount && <p className="text-sm text-red-500 mt-1">{errors.loanAmount}</p>}
                </div>

                <div>
                  <Label htmlFor="loanPurpose">Loan Purpose *</Label>
                  <Select
                    value={applicationData.loanPurpose}
                    onValueChange={(value) => handleInputChange("loanPurpose", value)}
                  >
                    <SelectTrigger className={errors.loanPurpose ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select loan purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal Loan</SelectItem>
                      <SelectItem value="auto">Auto Loan</SelectItem>
                      <SelectItem value="home">Home Improvement</SelectItem>
                      <SelectItem value="business">Business Loan</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.loanPurpose && <p className="text-sm text-red-500 mt-1">{errors.loanPurpose}</p>}
                </div>

                <div>
                  <Label htmlFor="loanTerm">Loan Term (months) *</Label>
                  <Select
                    value={applicationData.loanTerm}
                    onValueChange={(value) => handleInputChange("loanTerm", value)}
                  >
                    <SelectTrigger className={errors.loanTerm ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select loan term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="48">48 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                      <SelectItem value="72">72 months</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.loanTerm && <p className="text-sm text-red-500 mt-1">{errors.loanTerm}</p>}
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        if (!user) {
          return (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Account Required</h3>
                <p className="text-gray-600 mb-4">You need an account to continue with your loan application.</p>
                <div className="space-y-3">
                  <Button
                    onClick={() => router.push("/signup")}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                  >
                    Create Account
                  </Button>
                  <Button variant="outline" onClick={() => router.push("/")} className="w-full">
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          )
        }
      // Fall through to financial information if user is logged in

      case user ? 2 : 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Financial Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="monthlyIncome">Monthly Income *</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    placeholder="5000"
                    value={applicationData.monthlyIncome}
                    onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                    className={errors.monthlyIncome ? "border-red-500" : ""}
                  />
                  {errors.monthlyIncome && <p className="text-sm text-red-500 mt-1">{errors.monthlyIncome}</p>}
                </div>

                <div>
                  <Label htmlFor="employmentLength">Employment Length *</Label>
                  <Select
                    value={applicationData.employmentLength}
                    onValueChange={(value) => handleInputChange("employmentLength", value)}
                  >
                    <SelectTrigger className={errors.employmentLength ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select employment length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="2-5">2-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="more-than-10">More than 10 years</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.employmentLength && <p className="text-sm text-red-500 mt-1">{errors.employmentLength}</p>}
                </div>

                <div>
                  <Label htmlFor="creditScore">Credit Score Range *</Label>
                  <Select
                    value={applicationData.creditScore}
                    onValueChange={(value) => handleInputChange("creditScore", value)}
                  >
                    <SelectTrigger className={errors.creditScore ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select credit score range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent (750+)</SelectItem>
                      <SelectItem value="good">Good (700-749)</SelectItem>
                      <SelectItem value="fair">Fair (650-699)</SelectItem>
                      <SelectItem value="poor">Poor (600-649)</SelectItem>
                      <SelectItem value="very-poor">Very Poor (Below 600)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.creditScore && <p className="text-sm text-red-500 mt-1">{errors.creditScore}</p>}
                </div>

                <div>
                  <Label htmlFor="existingDebts">Existing Monthly Debt Payments</Label>
                  <Input
                    id="existingDebts"
                    type="number"
                    placeholder="500"
                    value={applicationData.existingDebts}
                    onChange={(e) => handleInputChange("existingDebts", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case user ? 3 : 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="collateral">Collateral (if applicable)</Label>
                  <Input
                    id="collateral"
                    type="text"
                    placeholder="Vehicle, Property, etc."
                    value={applicationData.collateral}
                    onChange={(e) => handleInputChange("collateral", e.target.value)}
                  />
                </div>

                {/* <div>
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Any additional information you'd like to provide..."
                    value={applicationData.additionalInfo}
                    onChange={(e: any) => handleInputChange("additionalInfo", e.target.value)}
                    rows={4}
                  />
                </div> */}
              </div>
            </div>
          </div>
        )

      case user ? 4 : 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Review Your Application</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Loan Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>Amount: ${Number.parseFloat(applicationData.loanAmount || "0").toLocaleString()}</div>
                    <div>Purpose: {applicationData.loanPurpose}</div>
                    <div>Term: {applicationData.loanTerm} months</div>
                    <div>Est. Monthly Payment: ${calculateMonthlyPayment().toLocaleString()}</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Financial Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                      Monthly Income: ${Number.parseFloat(applicationData.monthlyIncome || "0").toLocaleString()}
                    </div>
                    <div>Employment: {applicationData.employmentLength}</div>
                    <div>Credit Score: {applicationData.creditScore}</div>
                    <div>
                      Existing Debts: ${Number.parseFloat(applicationData.existingDebts || "0").toLocaleString()}
                    </div>
                  </div>
                </div>

                {user && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Applicant Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>Name: {user.name}</div>
                      <div>Email: {user.email}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Application Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Loan Application</CardTitle>
            <CardDescription className="text-center">
              Complete your loan application in a few simple steps
            </CardDescription>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>
                  Step {Math.min(currentStep, totalSteps)} of {totalSteps}
                </span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </CardHeader>

          <CardContent>
            {renderStepContent()}

            {/* Navigation Buttons */}
            {!isProcessing && !isApproved && (
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>

                {currentStep === totalSteps ? (
                  <Button
                    onClick={submitApplication}
                    className="bg-blue-900 hover:bg-blue-800 text-white flex items-center"
                  >
                    Submit Application
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={nextStep} className="bg-blue-900 hover:bg-blue-800 text-white flex items-center">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
