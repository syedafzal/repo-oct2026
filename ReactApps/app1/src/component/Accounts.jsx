export default function Accounts(props){
return (
    <div>
        <h2>Accounts Details</h2>
        <div>Account Holder Name: {props.name}</div>
        <div>Account Type: {props.acType}</div>
        <div>Balance: {props.balance}</div>
    </div>
)

}