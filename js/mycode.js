document.addEventListener('DOMContentLoaded', function() {
    const bookTourButton = document.querySelector('button[type="button"]');

    bookTourButton.addEventListener('click', function() {
        const numberOfParticipants = prompt("Please enter the number of tour participants:");

        if (numberOfParticipants && !isNaN(numberOfParticipants)) {
            const pricePerPerson = 140000;
            const totalPrice = numberOfParticipants * pricePerPerson;

            alert(`Your amount to pay is: ${totalPrice} VND`);
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    });
});
