export const utils = {
    putData: (value, setSaving) => {
        fetch(
            "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
            {
                method: "PUT",
                body: JSON.stringify({
                    mycount0026: value,
                }),
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);
                setSaving(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setSaving(false);
            });
    },
    getData: (setCount) => {
        fetch(
            "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/mycount0026.json"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data != null) {
                    setCount(Number(data));
                }
            });
    },
};
