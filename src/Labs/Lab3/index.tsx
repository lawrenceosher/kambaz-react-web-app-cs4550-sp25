import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInLine";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";

export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
    </div>
  );
}
