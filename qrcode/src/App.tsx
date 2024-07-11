import './App.css'
import Html5QrcodePlugin from './qecodePlugin';

const App = () => {

  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    console.log(decodedResult)
    console.log(decodedText)
  };

  function onScanSuccess(decodedText: any, decodedResult: any) {
    // Handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
    alert(decodedText)
  }

  return (
    <div className="App">
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onScanSuccess}
        verbose={true}
        onNewScanResult={onNewScanResult}
      />
    </div>
  );
};

export default App
