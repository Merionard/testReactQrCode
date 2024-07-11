import './App.css'
import Html5QrcodePlugin from './qecodePlugin';

const App = () => {

  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    console.log(decodedResult)
    console.log(decodedText)
  };

  return (
    <div className="App">
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
        verbose={true}
        onNewScanResult={onNewScanResult}
      />
    </div>
  );
};

export default App
