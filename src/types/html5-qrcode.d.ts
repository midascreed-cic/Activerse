declare module 'html5-qrcode' {
  export class Html5QrcodeScanner {
    constructor(
      elementId: string,
      config: {
        fps: number;
        qrbox: { width: number; height: number };
        aspectRatio: number;
        showTorchButtonIfSupported: boolean;
      },
      verbose: boolean
    );
    render(
      onScanSuccess: (decodedText: string, decodedResult: any) => void,
      onScanError: (error: string) => void
    ): void;
    clear(): Promise<void>;
  }
} 