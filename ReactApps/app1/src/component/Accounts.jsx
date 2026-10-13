export default function Accounts(props){

const addr = parseFloat(props.balance) + 500;
const nameCaps = props.name?.toUpperCase();
    return (

    <div>
        <h2>Accounts Details</h2>
        <div>Account Holder Name: {props.name} {nameCaps}</div>
        <div>Account Type: {props.acType}</div>
        <div>Balance: {addr}</div>
    </div>
)

}