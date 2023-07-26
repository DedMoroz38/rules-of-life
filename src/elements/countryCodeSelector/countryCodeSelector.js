import React, { useState, useRef } from "react";
import Styles from "./countryCodeSelector.module.scss";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

export const CountryCodeSelector = () => {
  const boxRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [countryCode, setCountryCode] = useState("+7");
  useOutsideAlerter(boxRef, () => setIsOpen(false));

  const CountryCodeOption = ({ children, value }) => {
    const myClickHandler = (e) => {
      setIsOpen(false);
      setCountryCode(`+${value}`);
    };
    return <p onClick={myClickHandler}>{children}</p>;
  };

  return (
    <div className={Styles.main} ref={boxRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? Styles.selectOpened : null}
      >
        {countryCode}
      </button>
      <div
        className={Styles.optionsBox}
        style={isOpen ? { display: "block" } : null}
      >
        <CountryCodeOption data-countrycode="RU" value="7">
          Россия (+7)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="DZ" value="213">
          Algeria (+213)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AD" value="376">
          Andorra (+376)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AO" value="244">
          Angola (+244)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AI" value="1264">
          Anguilla (+1264)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AG" value="1268">
          Antigua &amp; Barbuda (+1268)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AR" value="54">
          Argentina (+54)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AM" value="374">
          Armenia (+374)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AW" value="297">
          Aruba (+297)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AU" value="61">
          Australia (+61)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AT" value="43">
          Austria (+43)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AZ" value="994">
          Azerbaijan (+994)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BS" value="1242">
          Bahamas (+1242)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BH" value="973">
          Bahrain (+973)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BD" value="880">
          Bangladesh (+880)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BB" value="1246">
          Barbados (+1246)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BY" value="375">
          Belarus (+375)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BE" value="32">
          Belgium (+32)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BZ" value="501">
          Belize (+501)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BJ" value="229">
          Benin (+229)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BM" value="1441">
          Bermuda (+1441)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BT" value="975">
          Bhutan (+975)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BO" value="591">
          Bolivia (+591)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BA" value="387">
          Bosnia Herzegovina (+387)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BW" value="267">
          Botswana (+267)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BR" value="55">
          Brazil (+55)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BN" value="673">
          Brunei (+673)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BG" value="359">
          Bulgaria (+359)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BF" value="226">
          Burkina Faso (+226)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="BI" value="257">
          Burundi (+257)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KH" value="855">
          Cambodia (+855)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CM" value="237">
          Cameroon (+237)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CA" value="1">
          Canada (+1)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CV" value="238">
          Cape Verde Islands (+238)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KY" value="1345">
          Cayman Islands (+1345)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CF" value="236">
          Central African Republic (+236)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CL" value="56">
          Chile (+56)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CN" value="86">
          China (+86)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CO" value="57">
          Colombia (+57)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KM" value="269">
          Comoros (+269)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CG" value="242">
          Congo (+242)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CK" value="682">
          Cook Islands (+682)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CR" value="506">
          Costa Rica (+506)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="HR" value="385">
          Croatia (+385)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CU" value="53">
          Cuba (+53)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CY" value="90392">
          Cyprus North (+90392)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CY" value="357">
          Cyprus South (+357)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CZ" value="42">
          Czech Republic (+42)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="DK" value="45">
          Denmark (+45)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="DJ" value="253">
          Djibouti (+253)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="DM" value="1809">
          Dominica (+1809)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="DO" value="1809">
          Dominican Republic (+1809)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="EC" value="593">
          Ecuador (+593)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="EG" value="20">
          Egypt (+20)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SV" value="503">
          El Salvador (+503)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GQ" value="240">
          Equatorial Guinea (+240)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ER" value="291">
          Eritrea (+291)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="EE" value="372">
          Estonia (+372)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ET" value="251">
          Ethiopia (+251)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="FK" value="500">
          Falkland Islands (+500)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="FO" value="298">
          Faroe Islands (+298)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="FJ" value="679">
          Fiji (+679)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="FI" value="358">
          Finland (+358)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="FR" value="33">
          France (+33)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GF" value="594">
          French Guiana (+594)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PF" value="689">
          French Polynesia (+689)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GA" value="241">
          Gabon (+241)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GM" value="220">
          Gambia (+220)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GE" value="7880">
          Georgia (+7880)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="DE" value="49">
          Germany (+49)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GH" value="233">
          Ghana (+233)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GI" value="350">
          Gibraltar (+350)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GR" value="30">
          Greece (+30)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GL" value="299">
          Greenland (+299)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GD" value="1473">
          Grenada (+1473)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GP" value="590">
          Guadeloupe (+590)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GU" value="671">
          Guam (+671)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GT" value="502">
          Guatemala (+502)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GN" value="224">
          Guinea (+224)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GW" value="245">
          Guinea - Bissau (+245)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GY" value="592">
          Guyana (+592)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="HT" value="509">
          Haiti (+509)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="HN" value="504">
          Honduras (+504)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="HK" value="852">
          Hong Kong (+852)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="HU" value="36">
          Hungary (+36)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="IS" value="354">
          Iceland (+354)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="IN" value="91">
          India (+91)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ID" value="62">
          Indonesia (+62)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="IR" value="98">
          Iran (+98)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="IQ" value="964">
          Iraq (+964)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="IE" value="353">
          Ireland (+353)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="IL" value="972">
          Israel (+972)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="IT" value="39">
          Italy (+39)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="JM" value="1876">
          Jamaica (+1876)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="JP" value="81">
          Japan (+81)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="JO" value="962">
          Jordan (+962)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KZ" value="7">
          Kazakhstan (+7)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KE" value="254">
          Kenya (+254)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KI" value="686">
          Kiribati (+686)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KP" value="850">
          Korea North (+850)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KR" value="82">
          Korea South (+82)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KW" value="965">
          Kuwait (+965)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KG" value="996">
          Kyrgyzstan (+996)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LA" value="856">
          Laos (+856)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LV" value="371">
          Latvia (+371)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LB" value="961">
          Lebanon (+961)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LS" value="266">
          Lesotho (+266)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LR" value="231">
          Liberia (+231)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LY" value="218">
          Libya (+218)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LI" value="417">
          Liechtenstein (+417)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LT" value="370">
          Lithuania (+370)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LU" value="352">
          Luxembourg (+352)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MO" value="853">
          Macao (+853)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MK" value="389">
          Macedonia (+389)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MG" value="261">
          Madagascar (+261)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MW" value="265">
          Malawi (+265)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MY" value="60">
          Malaysia (+60)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MV" value="960">
          Maldives (+960)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ML" value="223">
          Mali (+223)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MT" value="356">
          Malta (+356)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MH" value="692">
          Marshall Islands (+692)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MQ" value="596">
          Martinique (+596)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MR" value="222">
          Mauritania (+222)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="YT" value="269">
          Mayotte (+269)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MX" value="52">
          Mexico (+52)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="FM" value="691">
          Micronesia (+691)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MD" value="373">
          Moldova (+373)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MC" value="377">
          Monaco (+377)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MN" value="976">
          Mongolia (+976)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MS" value="1664">
          Montserrat (+1664)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MA" value="212">
          Morocco (+212)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MZ" value="258">
          Mozambique (+258)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="MN" value="95">
          Myanmar (+95)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NA" value="264">
          Namibia (+264)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NR" value="674">
          Nauru (+674)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NP" value="977">
          Nepal (+977)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NL" value="31">
          Netherlands (+31)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NC" value="687">
          New Caledonia (+687)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NZ" value="64">
          New Zealand (+64)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NI" value="505">
          Nicaragua (+505)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NE" value="227">
          Niger (+227)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NG" value="234">
          Nigeria (+234)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NU" value="683">
          Niue (+683)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NF" value="672">
          Norfolk Islands (+672)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NP" value="670">
          Northern Marianas (+670)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="NO" value="47">
          Norway (+47)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="OM" value="968">
          Oman (+968)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PW" value="680">
          Palau (+680)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PA" value="507">
          Panama (+507)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PG" value="675">
          Papua New Guinea (+675)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PY" value="595">
          Paraguay (+595)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PE" value="51">
          Peru (+51)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PH" value="63">
          Philippines (+63)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PL" value="48">
          Poland (+48)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PT" value="351">
          Portugal (+351)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="PR" value="1787">
          Puerto Rico (+1787)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="QA" value="974">
          Qatar (+974)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="RE" value="262">
          Reunion (+262)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="RO" value="40">
          Romania (+40)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="RW" value="250">
          Rwanda (+250)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SM" value="378">
          San Marino (+378)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ST" value="239">
          Sao Tome &amp; Principe (+239)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SA" value="966">
          Saudi Arabia (+966)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SN" value="221">
          Senegal (+221)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CS" value="381">
          Serbia (+381)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SC" value="248">
          Seychelles (+248)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SL" value="232">
          Sierra Leone (+232)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SG" value="65">
          Singapore (+65)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SK" value="421">
          Slovak Republic (+421)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SI" value="386">
          Slovenia (+386)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SB" value="677">
          Solomon Islands (+677)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SO" value="252">
          Somalia (+252)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ZA" value="27">
          South Africa (+27)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ES" value="34">
          Spain (+34)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="LK" value="94">
          Sri Lanka (+94)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SH" value="290">
          St. Helena (+290)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="KN" value="1869">
          St. Kitts (+1869)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SC" value="1758">
          St. Lucia (+1758)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SD" value="249">
          Sudan (+249)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SR" value="597">
          Suriname (+597)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SZ" value="268">
          Swaziland (+268)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SE" value="46">
          Sweden (+46)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="CH" value="41">
          Switzerland (+41)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="SI" value="963">
          Syria (+963)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TW" value="886">
          Taiwan (+886)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TJ" value="7">
          Tajikstan (+7)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TH" value="66">
          Thailand (+66)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TG" value="228">
          Togo (+228)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TO" value="676">
          Tonga (+676)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TT" value="1868">
          Trinidad &amp; Tobago (+1868)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TN" value="216">
          Tunisia (+216)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TR" value="90">
          Turkey (+90)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TM" value="7">
          Turkmenistan (+7)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TM" value="993">
          Turkmenistan (+993)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TC" value="1649">
          Turks &amp; Caicos Islands (+1649)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="TV" value="688">
          Tuvalu (+688)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="UG" value="256">
          Uganda (+256)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="GB" value="44">
          UK (+44)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="UA" value="380">
          Ukraine (+380)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="AE" value="971">
          United Arab Emirates (+971)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="UY" value="598">
          Uruguay (+598)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="US" value="1">
          USA (+1)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="UZ" value="7">
          Uzbekistan (+7)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="VU" value="678">
          Vanuatu (+678)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="VA" value="379">
          Vatican City (+379)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="VE" value="58">
          Venezuela (+58)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="VN" value="84">
          Vietnam (+84)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="VG" value="84">
          Virgin Islands - British (+1284)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="VI" value="84">
          Virgin Islands - US (+1340)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="WF" value="681">
          Wallis &amp; Futuna (+681)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="YE" value="969">
          Yemen (North)(+969)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="YE" value="967">
          Yemen (South)(+967)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ZM" value="260">
          Zambia (+260)
        </CountryCodeOption>
        <CountryCodeOption data-countrycode="ZW" value="263">
          Zimbabwe (+263)
        </CountryCodeOption>
      </div>
    </div>
  );
};
