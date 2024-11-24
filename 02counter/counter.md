
Summary


 let counter = 15

  const addValue = () => {
    console.log("clicked",counter);
    counter = counter + 1

  }

  return (
    <>
    <h1>Code with React !</h1>

    <h2>Counter Value: {counter} </h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button>Remove Value</button>
    </>

  )


<!-- *  Without Hooks  use === ui ma dekhaena value  yesma chai click garda console ma chai chalyoo -->


<!-- *  With Hooks  use === ui ma dekhayo value  useState bhanne hook use garem ta ba hamro ui ma click garda value change bhako dekhayoo -->

<!-- ! useState Hooks -->

<!-- ?  -->