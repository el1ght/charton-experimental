"use client"

import { type Platform, useLaunchParams } from "@telegram-apps/sdk-react"
import { useEffect, useState } from "react"

export const useIsIpad = () => {
    const [isIpad, setIsIpad] = useState(false)

    useEffect(() => {
        setIsIpad(/Macintosh/.test(navigator.userAgent) && "ontouchend" in document)
    }, [])

    return isIpad
}

export const useIsMobile = () => {
    const launchParams = useLaunchParams()
    const isIpad = useIsIpad()

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (launchParams === undefined) return

        const nonMobilePlatforms = ["macos", "tdesktop", "weba", "web", "webk"] as Platform[]

        setIsMobile(!nonMobilePlatforms.includes(launchParams.platform) && !isIpad)
    }, [launchParams, isIpad])

    return isMobile
}

export const useIsIOS = () => {
    const launchParams = useLaunchParams()
    const isIpad = useIsIpad()

    const [isIOS, setIsIOS] = useState(false)

    useEffect(() => {
        if (launchParams === undefined) return

        setIsIOS(launchParams.platform === "ios" && !isIpad)
    }, [launchParams, isIpad])

    return isIOS
}

export const useIsAndroid = () => {
    const launchParams = useLaunchParams()

    const [isAndroid, setIsAndroid] = useState(false)

    useEffect(() => {
        if (launchParams === undefined) return

        setIsAndroid(launchParams.platform === "android")
    }, [launchParams])

    return isAndroid
}