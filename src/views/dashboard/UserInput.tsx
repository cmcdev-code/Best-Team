import { NONAME } from "dns"

import * as tf from '@tensorflow/tfjs';
import React, { useState, useEffect } from 'react';


import Card from '@mui/material/Card'

import Typography from '@mui/material/Typography'

import Chart from 'chart.js/auto';

function ParentUserInputs() {
  // Define state variables and handlers for each variable
  const [money, setMoney] = useState<number>(0);
  const [credit, setCredit] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [loan, setLoan] = useState<number>(0);
  const [debt, setDebt] = useState<number>(0);
  const [assets, setAssets] = useState<number>(0);
  const [grad, setGrad] = useState<boolean>(false);

  // localStorage.clear()
  // localStorage.setItem("money",money.toString());
  // localStorage.setItem("credit",credit.toString());
  // localStorage.setItem("term",term.toString());
  // localStorage.setItem("loan",loan.toString());
  // localStorage.setItem("debt",debt.toString());
  // localStorage.setItem("assets",assets.toString());
  // localStorage.setItem("grad",grad.toString());


// function signalChangeToChart({onChange}){
// const callBack() = () => {
//  onChange(true);
// }


// useEffect (() => {
//       callBack();
// }, [money, credit, term, loan, debt, assets, grad])

  return (
    <div>
      {/* Pass state variables and handlers as props to child components */}
      <MoneyInput money={money} onMoneyChange={setMoney} />
      <CreditInput credit={credit} onCreditChange={setCredit} />
      <TermInput term={term} onTermChange={setTerm} />
      <LoanInput loan={loan} onLoanChange={setLoan} />
      <DebtInput debt={debt} onDebtChange={setDebt} />
      <AssetsInput assets={assets} onAssetsChange={setAssets} />
      <GradInput grad={grad} onGradChange={setGrad} />
      <AiPrediction money={money} credit={credit} term={term} loan={loan} debt={debt} assets={assets} grad={grad}/>
    </div>
  );
}



function GradInput({grad,onGradChange}:{grad: boolean; onGradChange: (value: boolean)=>void}){
  const handelGradChange=()=>{
    onGradChange(!grad);
  }
  return (
    <div>
        <Typography component='h1' variant='h6' sx={{ mb: 10 }}>
        Did you graduate from college?
        </Typography>
      
      <input 
      type = "checkBox"
      id="gradCheckBox"
      onChange={handelGradChange}
      />
    </div>
  );

}


import { customColors } from "src/@core/theme/palette";
import { Label } from "mdi-material-ui";

function AssetsInput({assets,onAssetsChange}:{assets:number, onAssetsChange: (value:number)=>void}){
  const handelAssetsChange= (e5: React.ChangeEvent<HTMLInputElement>)=>{
    const newAssets= parseFloat(e5.target.value);
    if(!isNaN(newAssets)){
      onAssetsChange(newAssets);
    }else{
      onAssetsChange(0);
    }
  }
  return (
    <div>
    <label>Assets:</label>
    <input
      type="textfield"
      value={assets}
      onChange={handelAssetsChange}
      placeholder="Enter your current Assets"
    />
    
  </div>
  );
}

function DebtInput({debt, onDebtChange}: {debt: number; onDebtChange: (value : number )=> void}){
  const handleDebtChange= (e4: React.ChangeEvent<HTMLInputElement>)=>{
    const newDebt= parseFloat(e4.target.value);
    if(!isNaN(newDebt)){
      onDebtChange(newDebt);
    }else{
      onDebtChange(0);
    }
  }
return (
  <div>
  <label>Debt:</label>
  <input
    type="number"
    value={debt}
    onChange={handleDebtChange}
    placeholder="Enter your current debt"
  />
</div>
);

}

// Define separate child components for each state variable
function MoneyInput({ money, onMoneyChange }: { money: number; onMoneyChange: (value: number) => void }) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMoney = parseFloat(e.target.value);
    if (!isNaN(newMoney)) {
      onMoneyChange(newMoney);
    } else {
      onMoneyChange(0);
    }
  };

  return (
    <div>
      <label>Enter Your Salary</label>
      <input
        type="number"
        value={money}
        onChange={handleInputChange}
        placeholder="Enter money"
      />
    </div>
  );
}
function CreditInput({ credit, onCreditChange }: { credit: number; onCreditChange: (value: number) => void }) {
  const handleCreditInputChange = (e1: React.ChangeEvent<HTMLInputElement>) => {
    const newCredit = parseFloat(e1.target.value);
    if (!isNaN(newCredit)) {
      onCreditChange(newCredit);
    } else {
      onCreditChange(0);
    }
  };

  return (
    <div>
      <label>Enter Your Credit Card Score</label>
      <input
        type="number"
        value={credit}
        onChange={handleCreditInputChange}
        placeholder="Enter Credit Score"
      />
    </div>
  );
}



{/* <Card>
<input
type="number"
placeholder="Enter an amount"
value={money}
onChange={handleMoneyChange}

/>
</Card>); */}
function TermInput({term,onTermChange}:{term:number, onTermChange:(value:number)=>void}){
  const handleTermChange= (e2: React.ChangeEvent<HTMLInputElement>)=>{
    const newTerm=parseFloat(e2.target.value);
    if(!isNaN(newTerm)){
      onTermChange(newTerm);
    }else{
      onTermChange(0);
    }
  }
  return (
    <div>
      <label>Term of Loan:</label>
    <input
      type="number"
      value={term}
      onChange ={handleTermChange}
      placeholder="Enter Term of Loan"
    />
    </div>
  )
}

function LoanInput({loan,onLoanChange}:{loan:number, onLoanChange:(value:number)=> void}){
  const handleLoanChange=(e3: React.ChangeEvent<HTMLInputElement>)=>{
    const newLoan=parseFloat(e3.target.value);
    if(!isNaN(newLoan)){
      onLoanChange(newLoan);
    }else{
      onLoanChange(0);
    }
  }
  return (

  <div>
      <label>Amount for Loan:</label>
    <input
      type="number"
      value={loan}
      onChange ={handleLoanChange}
      placeholder="Enter the Amount the loan is for"
    />
    </div>
  )

}


const modelJson = {"format": "layers-model", "generatedBy": "keras v2.9.0", "convertedBy": "TensorFlow.js Converter v3.19.0", "modelTopology": {"keras_version": "2.9.0", "backend": "tensorflow", "model_config": {"class_name": "Sequential", "config": {"name": "sequential", "layers": [{"class_name": "InputLayer", "config": {"batch_input_shape": [null, 10], "dtype": "float32", "sparse": false, "ragged": false, "name": "dense_input"}}, {"class_name": "Dense", "config": {"name": "dense", "trainable": true, "batch_input_shape": [null, 10], "dtype": "float32", "units": 20, "activation": "swish", "use_bias": true, "kernel_initializer": {"class_name": "GlorotUniform", "config": {"seed": null}}, "bias_initializer": {"class_name": "Zeros", "config": {}}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}}, {"class_name": "Dense", "config": {"name": "dense_1", "trainable": true, "dtype": "float32", "units": 15, "activation": "swish", "use_bias": true, "kernel_initializer": {"class_name": "GlorotUniform", "config": {"seed": null}}, "bias_initializer": {"class_name": "Zeros", "config": {}}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}}, {"class_name": "Dense", "config": {"name": "dense_2", "trainable": true, "dtype": "float32", "units": 10, "activation": "tanh", "use_bias": true, "kernel_initializer": {"class_name": "GlorotUniform", "config": {"seed": null}}, "bias_initializer": {"class_name": "Zeros", "config": {}}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}}, {"class_name": "Dense", "config": {"name": "dense_3", "trainable": true, "dtype": "float32", "units": 1, "activation": "sigmoid", "use_bias": true, "kernel_initializer": {"class_name": "GlorotUniform", "config": {"seed": null}}, "bias_initializer": {"class_name": "Zeros", "config": {}}, "kernel_regularizer": null, "bias_regularizer": null, "activity_regularizer": null, "kernel_constraint": null, "bias_constraint": null}}]}}, "training_config": {"loss": "binary_crossentropy", "metrics": [[{"class_name": "MeanMetricWrapper", "config": {"name": "accuracy", "dtype": "float32", "fn": "binary_accuracy"}}]], "weighted_metrics": null, "loss_weights": null, "optimizer_config": {"class_name": "Adam", "config": {"name": "Adam", "learning_rate": 0.0010000000474974513, "decay": 0.0, "beta_1": 0.8999999761581421, "beta_2": 0.9990000128746033, "epsilon": 1e-07, "amsgrad": false}}}}, "weightsManifest": [{"paths": ["group1-shard1of1.bin"], "weights": [{"name": "dense/kernel", "shape": [10, 20], "dtype": "float32"}, {"name": "dense/bias", "shape": [20], "dtype": "float32"}, {"name": "dense_1/kernel", "shape": [20, 15], "dtype": "float32"}, {"name": "dense_1/bias", "shape": [15], "dtype": "float32"}, {"name": "dense_2/kernel", "shape": [15, 10], "dtype": "float32"}, {"name": "dense_2/bias", "shape": [10], "dtype": "float32"}, {"name": "dense_3/kernel", "shape": [10, 1], "dtype": "float32"}, {"name": "dense_3/bias", "shape": [1], "dtype": "float32"}]}]};





async function loadModel() {
  const model = await tf.loadLayersModel(tf.io.fromMemory(modelJson));
  return model;
}

async function predict({
  money,
  credit,
  term,
  loan,
  debt,
  assets,
  grad,
}: {
  money: number;
  credit: number;
  term: number;
  loan: number;
  debt: number;
  assets: number;
  grad: boolean;
}) {
  const no_of_dependents = 1.5;
  const education = 0;
  const income_annum = money;
  const loan_amount = loan;
  const loan_term = term;
  const cibil_score = credit;
  const residential_assets_value = assets;
  const commercial_assets_value = assets;
  const luxury_assets_value = assets;
  const bank_asset_value = assets;

  // Load the model
  const loadedModel = await loadModel();

  const inputTensor = tf.tensor([
    [no_of_dependents, education, income_annum, loan_amount, loan_term, cibil_score, 
    residential_assets_value, commercial_assets_value, luxury_assets_value, bank_asset_value]
]);
// Make predictions using the loaded model
const predictions = loadedModel.predict(inputTensor);

// Log predictions for debugging
console.log('Predictions:', predictions);

// Define a function to apply the sigmoid activation


let predictionValue: number;

// Check if predictions is an array or a single tensor
if (Array.isArray(predictions)) {
  // If it's an array, assume the first tensor is the prediction
  const firstPrediction = predictions[0].dataSync()[0];
  
  predictionValue = firstPrediction;
} else {
  // If it's a single tensor, directly use it for prediction
  const singlePrediction = (predictions as tf.Tensor).dataSync()[0];
  
  predictionValue = singlePrediction;
}

console.log('Final Prediction Value:', predictionValue);

return predictionValue;
}

function AiPrediction({
  money,
  credit,
  term,
  loan,
  debt,
  assets,
  grad,
}: {
  money: number;
  credit: number;
  term: number;
  loan: number;
  debt: number;
  assets: number;
  grad: boolean;
}) {
  const [prediction, setPrediction] = useState<number | null>(null);

  useEffect(() => {
    predict({ money, credit, term, loan, debt, assets, grad }).then((result) => {
      setPrediction(result);
    });
  }, [money, credit, term, loan, debt, assets, grad]);
if(money != 0 || credit!=0 || term !=0 || loan!=0 || debt!=0 ||assets!=0){
  return (
    <div>
      {prediction !== null ? (
        <p>The prediction result is: {prediction.toFixed(10)}</p>
      ) : (
        <p>Loading...</p>
      )}
      {/* Other JSX elements */}


        
    </div>
  );
      }else {
        return <div>
          <p>The prediction result is: 0.0000000</p>
        </div>
      }
}

// function plot(){

//   return (
//     //canvas for the plot
//     <canvas id="myLineChart" width="400" height="400"></canvas>
//   );
  
//   useEffect(() => {
//     const canvas = document.getElementById('myLineChart');

//     // Check if the canvas element exists before trying to get its context
//     if (canvas instanceof HTMLCanvasElement) {
//       const data = {
//         labels: ['January', 'February', 'March', 'April', 'May'],
//         datasets: [
//           {
//             label: 'My Line Dataset',
//             data: [10, 20, 15, 25, 30],
//             borderColor: 'blue',
//             backgroundColor: 'transparent',
//             borderWidth: 2,
//           },
//         ],
//       };

//       const config = {
//         type: 'line',
//         data: data,
//       };

//       // Render the line plot when the component mounts
//       const ctx = canvas.getContext('2d');
//       new Chart(ctx, config);
//     }
//   }, [money, credit, term, loan, debt, assets, grad]);

// }

// export default Plot;

export default ParentUserInputs