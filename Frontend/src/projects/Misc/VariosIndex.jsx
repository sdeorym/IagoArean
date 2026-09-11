
import { Link } from "react-router-dom";
import Domos from '@projects/Misc/Domos';
import Wild from '@projects/Misc/Wild';
import Conchas from '@projects/Misc/Conchas';

function VariosIndex() {

  return (
    <>
      <Link to="varios/"><h4>Fotos varias</h4></Link>
      <Wild />
      <Domos />
      <Conchas />
    </>
  )
}

export default VariosIndex