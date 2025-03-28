import Header from "../components/Header"
import {motion} from 'framer-motion'
import StatCard from "../components/StatCard"
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react"
import ProductTable from "../components/product/ProductTable"
import CategiryDistributionCharts from "../components/overview/CategiryDistributionCharts"
import SalesTrendChart from "../components/product/SalesTrendChart"

const ProductsPage =() => {
    return (
        <div className="flex-1 overflow-auto relative z-10">
         <Header title="Products " />

         <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/*-----STAT-----*/}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Sales" icon={Package} value = "$1234" color = "#6366F1"/>
          <StatCard name="New Users" icon={TrendingUp} value = "89" color = "#10B981"/>
          <StatCard name="Total products" icon={AlertTriangle} value = "23" color = "#F59E0B"/>
          <StatCard name="Conversion Rate" icon={DollarSign} value = "$543,210" color = "#EF4444"/>

        </motion.div>

        {/****-Producst Table--*/}
        <ProductTable/>

        {/*----Charts--*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <SalesTrendChart/>
             <CategiryDistributionCharts/>
        </div>


        </main>
      </div>
    )
}
export default ProductsPage