import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import CategoryIcon from '@mui/icons-material/Category';

const SummaryCards = ({title, value }: {title: string, value: string }) => {
  const getIcon = () => {
    switch(title) {
      case "Total Products": return <ShoppingCartIcon style={{width: "36px"}}  />
      case "Total Store Value": return <PaidIcon style={{width: "36px"}}/>
      case "Out Of Stock": return <RemoveShoppingCartIcon style={{width: "36px"}}/>
      default: return <CategoryIcon style={{width: "36px"}}/>
    }
  }
  return (
    <div className="summary-card">
      {getIcon()}
      <div className="summary-card-data">
         <p className="summary-card-title">{title}</p>
         <p className="summary-card-value"> {value}</p>
      </div>
    </div>
  )
}

export default SummaryCards