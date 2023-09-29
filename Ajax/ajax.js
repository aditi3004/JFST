document.addEventListener("DOMContentLoaded", function () {
    const customerDropdown = document.getElementById("customerDropdown");
    const shippingAddressDiv = document.getElementById("shippingAddress");

    // Fetch customer data from XML file using AJAX
    const xhr = new XMLHttpRequest();
    const url = "data.xml";

    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
            console.log(xmlDoc);
            const customers = xmlDoc.getElementsByTagName("customer");

            // Populate the dropdown with customer names and IDs
            for (let i = 0; i < customers.length; i++) {
                const customer = customers[i];
                const customerId = customer.getAttribute("id");
                const customerName = customer.querySelector("name").textContent;

                const option = document.createElement("option");
                option.value = customerId;
                option.textContent = customerName;
                customerDropdown.appendChild(option);
            }

            // Add a change event listener to the dropdown
            customerDropdown.addEventListener("change", function () {
                const selectedCustomerId = this.value;
                const selectedCustomer = xmlDoc.querySelector(`customer[id="${selectedCustomerId}"]`);
                if (selectedCustomer) {
                    const address = selectedCustomer.querySelector("address").textContent;
                    // Display the shipping address
                    shippingAddressDiv.textContent = `Shipping Address: ${address}`;
                } else {
                    // Clear the shipping address if no customer is selected
                    shippingAddressDiv.textContent = "No shipping address found";
                }
            });
        }
    };

    xhr.send();
});
