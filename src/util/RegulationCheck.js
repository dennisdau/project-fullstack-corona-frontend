class RegulationCheck{

    static  checkIfRegulationAreComplied = (data) => {
        //console.log(data)

        if (!data.regulation) return false 
        if (data.regulation.maskDuty===true && data.wearMaskInput===false) return false
        if (data.inClosedRoomsInput===true && 
            (data.personAmountInput >data.regulation.maxPersonsClosedRooms || data.householdsInput >data.regulation.maxHouseholdsClosedrooms ||
            data.personAmountInput/data.locationSizeInput>data.regulation.maxPersonsPerSquareMeterClosedRooms)) return false
        if (data.inClosedRoomsInput===false && 
            (data.personAmountInput >data.regulation.maxPersonsOutside || data.householdsInput >data.regulation.maxHouseholdsOutside ||
            data.personAmountInput/data.locationSizeInput>data.regulation.maxPersonsPerSquareMeterOutside)) return false
        console.log("Genehmigt")
        return true
        
    }
}

export default RegulationCheck