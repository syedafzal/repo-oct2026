export default function Box({children}){
return (
    <div style={{width: '100%', height:'100%', border: '5px solid grey', padding: '1rem',borderRadius:'12px'}}>
        {children}
    </div>
);

}