
const papertype = document.querySelector("#papertype");
const formAdd = document.querySelector ("#form-fields-add");
papertype.addEventListener("change", e => {
    const formdata = {
        'cedula':`
        <legend>Cedula Application <span>(Pag Aaply ng Sedula)</span></legend>
                <hr>
                <label for="applicant-name">Applicant Name: <span>(Buong pangalan ng kumukuha)</span></label>
                <input type="text" name="applicant-name" id="applicant-name" placeholder="Jose P. Rizal Jr.">
                <label for="applicant-address">Address: <span>Tirahan</span></label>
                <input type="text" name="applicant-address" id="applicant-address"
                    placeholder="123 Cebu St. Barangay Pitogo, Taguig City" >
                <label for="birthdate">Birthday: <span>(Araw
                    ng kapanganakan)</span></label>
                <input type="date" name="applicant-birthday" id="applicant-birthday">
                <label for="birthplace">Birthplace: <span>(lugar ng kapanganakan)</span></label>
                <input type="text" name="applicant-birthplace" id="applicant-birthplace"
                    placeholder="Taguig City, Philippines">
                <label for="sex">Sex: <span>(Kasarian)</span></label>
                <select name="text" id="sex" name="sex">
                    <option value="Male">Male</option>
                    <hr>
                    <option value="Female"> Female </option>
                </select>
                <label for="civil-status">Civil Status: <span>(Pangkalagayang Sibil)</span></label>
                <select name="applicant-civil-status" id="applicant-civil-status" name="applicant-civil-status">
                    <option value="Single">Single</option>
                    <hr>
                    <option value="Married">Married</option>
                    <hr>
                    <option value="Widowed">Widowed</option>
                    <hr>
                </select>
                <label for="Tin">TIN ID NO: <span>(Numero sa iyong TIN)</span></label>
                <input type="text" name="Tin" id="Tin" placeholder="000-123-456-001 ">
                <label for="height">Height: <span>(Tangkad)</span></label>
                <input type="text" name="applicant-height" id="applicant-height" placeholder="172 cm">
                <label for="height">Weight: <span>(Bigat)</span></label>
                <input type="text" name="applicant-weight" id="applicant-weight" placeholder="69 kg">
                <label for="occupation">Occupation: <span>(Trabaho)</span></label>
                <input type="text" name="applicant-occupation" id="applicant-occupation" placeholder="Tubero">
                <label for="gross-salary">Monthly Gross Salary / Annual Gross: <span>(Buwanang Sweldo/Kabuuang Sweldo sa
                        isang taon)</span></label>
                <input type="text" name="-applicant-salary" id="monthly-gross-salary"
                    placeholder="PHP 50,000/PHP 600,000">
                <label for="daily-income">If (Business) Income in a Day: <span>(kung (negosyo) kita sa isang
                        araw)</span></label>
                <input type="text" name="applicant-daily-income" id="daily-income" placeholder="PHP 5,000">
                <label for="business-name">Name of Business: <span>(Pangalan ng Negosyo)</span></label>
                <input type="text" name="-applicant-business-name" id="applicant-business-name" placeholder="Sari-sari Store">
                <label for="purpose">Purpose: <span>(Para saan ang cedula)</span></label>
                <input type="text" name="applicant-purpose" id="applicant-purpose" placeholder="Renewal of Business Permit">
        `,
        
                'barangay-clearance': `
                <legend>Barangay Clearance / Certificate</legend>
                <hr>
                <label for="applicant-name">Applicant Name: <span>(Buong pangalan ng kumukuha)</span></label>
                <input type="text" name="applicant-name" id="applicant-name" placeholder="Jose P. Rizal Jr.">
                <label for="applicant-address">Address: <span>Tirahan</span></label>
                <input type="text" name="applicant-address" id="applicant-address"
                    placeholder="123 Cebu St. Barangay Pitogo, Taguig City" >
                <label for="age"> Age: <span>(Edad)</span></label>
                <input type="number" name = "age" id = "age">
                <label for="birthdate">Birthday: <span>(Araw ng kapanganakan)</span></label>
                <input type="date" name="applicant-birthday" id="applicant-birthday">
                <label for="purpose">Purpose: <span>(Para saan o saan gagamitin ang barangay certificate)</span></label>
                <textarea name="purpose" id="purpose"></textarea>

                `,

                'barangay-business-clearance':`
                <legend>Barangay Business Clearance Permit</legend>
                <hr>
                <label for="applicant-name">Applicant Name: <span>(Buong pangalan ng kumukuha)</span></label>
                <input type="text" name="applicant-name" id="applicant-name" placeholder="Jose P. Rizal Jr.">
                <label for="applicant-address">Address: <span>Tirahan</span></label>
                <input type="text" name="applicant-address" id="applicant-address" placeholder="123 Cebu St. Barangay Pitogo, Taguig City" >
                <label for="business-name">Name of Business: <span>(Pangalan ng Negosyo)</span></label>
                <input type="text" name="-applicant-business-name" id="applicant-business-name" placeholder="Sari-sari Store">
                <label for="business-capital">Capital of Business: <span>(Kapital ng Negosyo)</span></label>
                <input type="text" name="-applicant-business-name" id="applicant-business-name" placeholder="PHP 50,000">
                <label for="purpose">Purpose: <span>(Para saan o saan gagamitin ang business Clearance)</span></label>
                <select name="business-clearance-reason" id="business-clearance-reason">
                    <option value="new">New Business Permit</option>
                    <option value="renewal">Renewal of Business Permit</option>
                </select>               
                `,

                'barangay-id': `               
                <legend>Barangay ID</legend>
                <hr>
                <label for="applicant-name">Applicant Name: <span>(Buong pangalan ng kumukuha)</span></label>
                <input type="text" name="applicant-name" id="applicant-name" placeholder="Jose P. Rizal Jr.">
                <label for="applicant-address">Address: <span>Tirahan</span></label>
                <input type="text" name="applicant-address" id="applicant-address"
                    placeholder="123 Cebu St. Barangay Pitogo, Taguig City" >
                <label for="birthdate">Birthday: <span>(Araw
                    ng kapanganakan)</span></label>
                <input type="date" name="applicant-birthday" id="applicant-birthday">
                <label for="age"> Age: <span>(Edad)</span></label>
                <input type="number" name = "age" id = "age">
                <label for="applicant-mobile-number">Mobile number:</label>
                <input type="number" name="applicant-mobile-number" id="applicant-mobile-number" minlength="11" placeholder="09123456789">
                <label for="sex">Sex: <span>(Kasarian)</span></label>
                <select name="text" id="sex" name="sex">z
                    <option value="Male">Male</option>
                    <hr>
                    <option value="Female"> Female </option>
                </select>
                <label for="civil-status">Civil Status: <span>(Pangkalagayang Sibil)</span></label>
                <select name="applicant-civil-status" id="applicant-civil-status" name="applicant-civil-status">
                    <option value="Single">Single</option>
                    <hr>
                    <option value="Married">Married</option>
                    <hr>
                    <option value="Widowed">Widowed</option>
                    <hr>
                </select>
                <br>
                <br>
                <legend>Emergency Contact Person <span>(Ipapaalam kung sakaling magkaroon ng Emergency)</span></legend>
                <hr>
                <label for="emergency-contact-name">Applicant Name: <span>(Buong pangalan ng kumukuha)</span></label>
                <input type="text" name="applicant-name" id="applicant-name" placeholder="Jose P. Rizal Jr.">
                <label for="emergency-contact-address">Address: <span>Tirahan</span></label>
                <input type="text" name="applicant-address" id="applicant-address"
                placeholder="123 Cebu St. Barangay Pitogo, Taguig City" >
                <label for="emergency-contact-mobile-number">Mobile number:</label>
                <input type="number" name="applicant-mobile-number" id="applicant-mobile-number" minlength="11" placeholder="09123456789">`
    };


   formAdd.innerHTML = formdata[papertype.value];


});

papertype.dispatchEvent(new Event ('change'))