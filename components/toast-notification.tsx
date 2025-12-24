"use client"

import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle, Info, X } from "lucide-react"

interface Toast {
  id: string
  type: "success" | "error" | "info" | "warning"
  message: string
  duration?: number
}

let toastId = 0
const toastQueue: Toast[] = []
const listeners: Set<(toasts: Toast[]) => void> = new Set()

export function showToast(message: string, type: "success" | "error" | "info" | "warning" = "info", duration = 3000) {
  const id = `toast-${toastId++}`
  const toast: Toast = { id, type, message, duration }

  toastQueue.push(toast)
  listeners.forEach((listener) => listener([...toastQueue]))

  if (duration) {
    setTimeout(() => {
      removeToast(id)
    }, duration)
  }
}

export function removeToast(id: string) {
  const index = toastQueue.findIndex((t) => t.id === id)
  if (index > -1) {
    toastQueue.splice(index, 1)
    listeners.forEach((listener) => listener([...toastQueue]))
  }
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    listeners.add(setToasts)
    return () => {
      listeners.delete(setToasts)
    }
  }, [])

  return (
    <div className="fixed top-6 right-6 z-50 space-y-3 pointer-events-none">
      {toasts.map((toast) => {
        let bgColor = "bg-blue-50 border-blue-200"
        let textColor = "text-blue-700"
        let icon = <Info className="w-5 h-5" />

        if (toast.type === "success") {
          bgColor = "bg-green-50 border-green-200"
          textColor = "text-green-700"
          icon = <CheckCircle className="w-5 h-5" />
        } else if (toast.type === "error") {
          bgColor = "bg-red-50 border-red-200"
          textColor = "text-red-700"
          icon = <AlertCircle className="w-5 h-5" />
        } else if (toast.type === "warning") {
          bgColor = "bg-yellow-50 border-yellow-200"
          textColor = "text-yellow-700"
          icon = <AlertCircle className="w-5 h-5" />
        }

        return (
          <div
            key={toast.id}
            className={`${bgColor} border rounded-lg p-4 flex items-start gap-3 pointer-events-auto max-w-md animate-in slide-in-from-right`}
          >
            <div className={`flex-shrink-0 ${textColor}`}>{icon}</div>
            <p className={`text-sm font-medium ${textColor} flex-1`}>{toast.message}</p>
            <button onClick={() => removeToast(toast.id)} className={`flex-shrink-0 ${textColor} hover:opacity-70`}>
              <X className="w-4 h-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
