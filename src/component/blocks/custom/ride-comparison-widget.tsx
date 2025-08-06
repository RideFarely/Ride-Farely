"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Badge } from "@/src/component/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/component/ui/card"
import { Button } from "@/src/component/ui/button"

interface RideOption {
  id: string
  provider: string
  type: string
  price: number
  time: number
  logo: string
}

const rideOptions: RideOption[] = [
  {
    id: "ola",
    provider: "Ola",
    type: "Mini",
    price: 320,
    time: 15,
    logo: "O"
  },
  {
    id: "uber",
    provider: "Uber",
    type: "Go",
    price: 340,
    time: 12,
    logo: "U"
  },
  {
    id: "rapido",
    provider: "Rapido",
    type: "Bike",
    price: 180,
    time: 20,
    logo: "R"
  },
  {
    id: "blusmart",
    provider: "BluSmart",
    type: "EV Prime",
    price: 395,
    time: 18,
    logo: "B"
  }
]

export default function RideComparisonWidget() {
  const [selectedRide, setSelectedRide] = useState<string | null>(null)
  const [bookedRide, setBookedRide] = useState<string | null>(null)

  const handleBookRide = (rideId: string) => {
    setBookedRide(rideId)
    setSelectedRide(rideId)
  }

  const getSavings = () => {
    const priceDifference = 395 - 320
    return Math.max(50, priceDifference)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-4"
    >
      <Card className="overflow-hidden border border-border bg-card shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl font-semibold text-card-foreground">
                Connaught Place → Gurgaon Cyber Hub
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Compare and book your ride
              </p>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 px-3 py-1">
                You save ₹{getSavings()}
              </Badge>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {rideOptions.map((ride, index) => (
              <motion.div
                key={ride.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={selectedRide === ride.id ? "ring-2 ring-emerald-500/20 rounded-lg" : ""}
              >
                <div
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-200 cursor-pointer"
                  onClick={() => !bookedRide && setSelectedRide(ride.id)}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-card-foreground"
                    >
                      {ride.logo}
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-medium text-card-foreground">{ride.provider}</p>
                      <p className="text-sm text-muted-foreground">{ride.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-bold text-emerald-600 dark:text-emerald-400"
                      >
                        ₹{ride.price}
                      </motion.p>
                      <p className="text-sm text-muted-foreground">{ride.time} min</p>
                    </div>
                    
                    <Button
                      size="sm"
                      variant={selectedRide === ride.id ? "default" : "secondary"}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleBookRide(ride.id)
                      }}
                      disabled={bookedRide !== null && bookedRide !== ride.id}
                      className={`
                        px-4 py-2 transition-all duration-200 font-medium
                        ${selectedRide === ride.id 
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                          : 'bg-orange-500 hover:bg-orange-600 text-white hover:scale-105'
                        }
                        ${bookedRide === ride.id 
                          ? 'bg-green-600 cursor-default' 
                          : ''
                        }
                        ${bookedRide && bookedRide !== ride.id 
                          ? 'opacity-50 cursor-not-allowed' 
                          : ''
                        }
                      `}
                    >
                      {bookedRide === ride.id ? "Booked" : "Book Now"}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {bookedRide && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 text-center text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"
            >
              Your {rideOptions.find(r => r.id === bookedRide)?.provider} ride is confirmed!
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}