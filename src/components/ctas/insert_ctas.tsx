import React from "react";

// CTA imports
import MovingHouseCTAGasElectricity from "./content/gas-electricity/moving-house";
import SmartMeterCTA from "./content/gas-electricity/smart-meter";
import SupplyNumbersCTA from "./content/gas-electricity/supply-numbers";
import WarmHomeDiscountCTA from "./content/gas-electricity/warm-home-discount";

const insertCTAs = (content: any) => {
   let new_content = []

   for (let i = 0; i < content.length; i++) {
      const line = content[i];
      
      if(typeof line === 'string') {
         // Insert CTAs
         if(line.includes("[gas_electricity_moving_house_cta]")) {
            new_content.push(<MovingHouseCTAGasElectricity/>)

         } else if (line.includes("[gas_electricity_warm_home_discount_cta]")) {
            new_content.push(<WarmHomeDiscountCTA/>)
            
         } else if (line.includes("[gas_electricity_smart_meter_cta]")) {
            new_content.push(<SmartMeterCTA/>)
         
         } else if (line.includes("[gas_electricity_supply_numbers_cta]") || line.includes("[gas_electricity_serial_numbers_cta]")) {
            new_content.push(<SupplyNumbersCTA/>)

         } else {
            new_content.push(line)
         }
      } else {
         new_content.push(line)
      }
   }

   return new_content
}

export default insertCTAs