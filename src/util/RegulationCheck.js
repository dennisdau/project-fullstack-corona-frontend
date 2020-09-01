class RegulationCheck{


  /*  stateInput: 'Niedersachsen',
    personAmountInput: 0,
    householdsInput: 1,
    inClosedRoomsInput: true,
    locationSizeInput: 1,
    wearMaskInput: true,
    regulation:{}*/


 /*
​
closedBuildingtypes: "BÜRO"
​
id: 9
​
maskDuty: false
​
maxHouseholdsClosedrooms: 5
​
maxHouseholdsOutside: 8
​
maxPersonsClosedRooms: 10
​
maxPersonsOutside: 20
​
maxPersonsPerSquareMeterClosedRooms: 0.3
​
maxPersonsPerSquareMeterOutside: 0.1
​

​

​*/


    static  checkIfRegulationAreComplied = (data) => {
        console.log(data)
        if (!data.regulation) return false 
        if (data.regulation.maskDuty===true && data.wearMaskInput===false) return false
      

        console.log("nicht Genehmigt")
        return false
        
    }
}

export default RegulationCheck