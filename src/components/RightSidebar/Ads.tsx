import { useEffect } from 'preact/hooks'

declare let adsbygoogle: any;

export default function GoAds() {
    
    useEffect(()=> {
        (adsbygoogle = (window as any).adsbygoogle || []).push({});
    }, [])
    
    return (
        <ins className="adsbygoogle" style={{display: "block"}}
        data-ad-client="ca-pub-5144792726193676"
        data-ad-slot="7966160203"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    );
}
