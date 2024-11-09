import {useEffect, useState} from "react";

const useWebApp = () => {
    const [WebApp, setWebApp] = useState<any>(null);

    const loadWebApp = async () => {
        return (await import('@twa-dev/sdk')).default
    };

    useEffect(() => {
        loadWebApp().then(x => setWebApp(x));
    }, []);

    return WebApp;
}

export default useWebApp;