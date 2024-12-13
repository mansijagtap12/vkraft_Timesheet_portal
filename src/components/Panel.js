import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import InputField from './InputField';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, theme, Row } from 'antd';
import SelectField from './SelectField';
import { useLocation, useNavigate } from 'react-router-dom';
import { country, eInvoiceTypes, state, taxType } from '../utils/DropdownCodes';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const Panel = ({ file }) => {

    function getCurrentTime() {
        const date = new Date();
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}Z`;
    }
    const currTime = getCurrentTime();
    const location = useLocation();
    const navigate = useNavigate();
    const [numPages, setNumPages] = useState(null);
    const [formData, setFormData] = useState({
        supplierName: '',
        supplierTin: '',
        supplierRegistration: '',
        supplierEmail: '',
        supplierMalaysiaStandardIndustrialClassificationMsicCode: '',
        supplierBusinessActivityDescription: '',
        supplierAddressLine0: '',
        supplierAddressLine1: '',
        supplierAddressLine2: '',
        supplierPostalZone: '',
        supplierCityName: '',
        supplierState: '',
        supplierCountry: '',
        supplierContactNumber: '',
        buyerName: '',
        buyerTin: '',
        buyerRegistration: '',
        buyerSstRegistrationNumber: '',
        buyerEmail: '',
        buyerAddressLine0: '',
        buyerAddressLine1: '',
        buyerAddressLine2: '',
        buyerPostalZone: '',
        buyerCityName: '',
        buyerState: '',
        buyerCountry: '',
        buyerContactNumber: '',
        eInvoiceVersion: '',
        eInvoiceTypeCode: '',
        eInvoiceCodeNumber: '',
        eInvoiceDate: '',
        eInvoiceTime: '',
        issuerDigitalSignature: '',
        invoiceCurrencyCode: '',
        currencyExchangeRate: '',
        frequencyOfBilling: '',
        billingPeriodStartDate: '',
        billingPeriodEndDate: '',
        paymentMode: '',
        supplierBankAccountNumber: '',
        paymentTerms: '',
        prePaymentAmount: '',
        prePaymentDate: '',
        prePaymentTime: '',
        prePaymentReferenceNumber: '',
        billReferenceNumber: '',
        subTotal: '',
        totalExcludingTax: '',
        totalIncludingTax: '',
        totalPayableAmount: '',
        totalNetAmount: '',
        totalDiscountValue: '',
        totalFeeChargeAmount: '',
        totalTaxAmount: '',
        roundingAmount: '',
        totalTaxableAmountPerTaxType: '',
        totalTaxAmountPerTaxType: '',
        detailsOfTaxExemption: '',
        amountExemptedFromTax: '',
        taxType: '',
        invoiceAdditionalDiscountAmount: '',
        invoiceAdditionalFeeAmount: '',
        shippingRecipientName: '',
        addressLine0: '',
        addressLine1: '',
        addressLine2: '',
        postalZone: '',
        cityName: '',
        state: '',
        country: '',
        shippingRecipientTin: '',
        shippingRecipientRegistrationNumber: '',
        shippingRecipientPhoneNumber: '',
        supplyOrderReference: '',
        supplyOrderReferenceDate: '',
        supplyOrderReferenceTime: '',
        deliveryOrderReference: '',
        deliveryOrderReferenceDate: '',
        deliveryOrderReferenceTime: '',
        portOfEntry: '',
        recipientDeliveryInstructions: '',
        portOfEntryCode: '',
        placeOfReceiptByCarrier: '',
        meansOfTransport: '',
        placeOfDelivery: '',
        invoicePdfEncode: '',
        items: [],
    });

    const [showForm, setShowForm] = useState(false);

    const handleLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleExtractClick = async () => {
        try {
            const formData = new FormData();
            formData.append('pdf', file);

            const response = await axios.post('https://e-invoice-python.vercel.app/extract', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const responseData = response.data;
            setFormData({
                supplierName: responseData.supplier_name || 'Kraft Software Solutions Sdn Bhd',
                supplierTin: responseData.supplierTin || 'C22061399000',
                supplierRegistration: responseData.supplier_reg_no || '',
                supplierEmail: responseData.supplier_email || '',
                supplierMalaysiaStandardIndustrialClassificationMsicCode: responseData.supplierMalaysiaStandardIndustrialClassificationMsicCode || '01111',
                supplierBusinessActivityDescription: responseData.supplierBusinessActivityDescription || 'Growing of Cloths',
                supplierAddressLine0: responseData.supplier_address || '',
                supplierAddressLine1: responseData.supplierAddressLine1 || '',
                supplierAddressLine2: responseData.supplierAddressLine2 || '',
                supplierPostalZone: responseData.supplier_postal_code || '',
                supplierCityName: responseData.supplier_city || '',
                supplierState: responseData.supplierState || '00',
                supplierCountry: responseData.supplier_country || 'MYS',
                supplierContactNumber: responseData.supplier_contact || '',
                buyerName: responseData.buyer_name || '',
                buyerTin: responseData.buyerTin || 'C2584563200',
                buyerRegistration: responseData.buyerRegistration || '201001022673',
                buyerSstRegistrationNumber: responseData.buyerSstRegistrationNumber || 'Not Applicable',
                buyerEmail: responseData.email || '',
                buyerAddressLine0: responseData.buyer_address || '',
                buyerAddressLine1: responseData.buyerAddressLine1 || '',
                buyerAddressLine2: responseData.buyerAddressLine2 || '',
                buyerPostalZone: responseData.buyerPostalZone || '',
                buyerCityName: responseData.buyer_city || '',
                buyerState: responseData.buyerState || '00',
                buyerCountry: responseData.buyer_country || 'MYS',
                buyerContactNumber: responseData.contact || '',
                eInvoiceVersion: responseData.eInvoiceVersion || '1.0',
                eInvoiceTypeCode: responseData.eInvoiceTypeCode || '01',
                eInvoiceCodeNumber: responseData.invoice_no || '',
                eInvoiceDate: responseData.invoice_date || '',
                eInvoiceTime: responseData.eInvoiceTime || currTime,
                issuerDigitalSignature: responseData.issuerDigitalSignature || '',
                invoiceCurrencyCode: responseData.currency || 'MYR',
                currencyExchangeRate: responseData.currencyExchangeRate || '',
                frequencyOfBilling: responseData.frequencyOfBilling || '',
                billingPeriodStartDate: responseData.billingPeriodStartDate || '',
                billingPeriodEndDate: responseData.billingPeriodEndDate || '',
                paymentMode: responseData.paymentMode || '',
                supplierBankAccountNumber: responseData.supplierBankAccountNumber || '',
                paymentTerms: responseData.payment_term || '',
                prePaymentAmount: responseData.prePaymentAmount || '',
                prePaymentDate: responseData.prePaymentDate || '',
                prePaymentTime: responseData.prePaymentTime || '',
                prePaymentReferenceNumber: responseData.prePaymentReferenceNumber || '',
                billReferenceNumber: responseData.reference_no || '',
                subTotal: responseData.subtotal || '',
                totalExcludingTax: responseData.subtotal || '',
                totalIncludingTax: responseData.total || '',
                totalPayableAmount: responseData.total || '',
                totalNetAmount: responseData.total || '',
                totalDiscountValue: responseData.discount || '0',
                totalFeeChargeAmount: responseData.totalFeeChargeAmount || '',
                totalTaxAmount: responseData.service_tax || '0',
                roundingAmount: responseData.roundingAmount || '',
                totalTaxableAmountPerTaxType: responseData.totalTaxableAmountPerTaxType || '',
                totalTaxAmountPerTaxType: responseData.totalTaxAmountPerTaxType || '',
                detailsOfTaxExemption: responseData.detailsOfTaxExemption || '',
                amountExemptedFromTax: responseData.amountExemptedFromTax || '',
                taxType: responseData.taxType || '02',
                invoiceAdditionalDiscountAmount: responseData.invoiceAdditionalDiscountAmount || '',
                invoiceAdditionalFeeAmount: responseData.invoiceAdditionalFeeAmount || '',
                shippingRecipientName: responseData.shippingRecipientName || '',
                addressLine0: responseData.addressLine0 || '',
                addressLine1: responseData.addressLine1 || '',
                addressLine2: responseData.addressLine2 || '',
                postalZone: responseData.postalZone || '',
                cityName: responseData.cityName || '',
                state: responseData.state || '',
                country: responseData.country || '',
                shippingRecipientTin: responseData.shippingRecipientTin || '',
                shippingRecipientRegistrationNumber: responseData.shippingRecipientRegistrationNumber || '',
                shippingRecipientPhoneNumber: responseData.shippingRecipientPhoneNumber || '',
                supplyOrderReference: responseData.supplyOrderReference || '',
                supplyOrderReferenceDate: responseData.supplyOrderReferenceDate || '',
                supplyOrderReferenceTime: responseData.supplyOrderReferenceTime || '',
                deliveryOrderReference: responseData.deliveryOrderReference || '',
                deliveryOrderReferenceDate: responseData.deliveryOrderReferenceDate || '',
                deliveryOrderReferenceTime: responseData.deliveryOrderReferenceTime || '',
                portOfEntry: responseData.portOfEntry || '',
                recipientDeliveryInstructions: responseData.recipientDeliveryInstructions || '',
                portOfEntryCode: responseData.portOfEntryCode || '',
                placeOfReceiptByCarrier: responseData.placeOfReceiptByCarrier || '',
                meansOfTransport: responseData.meansOfTransport || '',
                placeOfDelivery: responseData.placeOfDelivery || '',
                invoicePdfEncode: responseData.invoicePdfEncode,
                items: responseData.items || [],
            });
            setShowForm(true);
        } catch (error) {
            console.error('Error extracting data:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSelectChange = (name, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const invoiceFields = () => (
        <>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <SelectField placeholder="Invoice Type" name="eInvoiceTypeCode" value={formData.eInvoiceTypeCode} options={eInvoiceTypes()} onChange={(value) => handleSelectChange('eInvoiceTypeCode', value)} span="12" />
                <InputField placeholder="Invoice No" name="eInvoiceCodeNumber" value={formData.eInvoiceCodeNumber} onChange={handleInputChange} span="12" />
                <InputField placeholder="Invoice Date" name="eInvoiceDate" value={formData.eInvoiceDate} onChange={handleInputChange} span="12" />
                <InputField placeholder="Invoice Time" name="eInvoiceTime" value={formData.eInvoiceTime} onChange={handleInputChange} span="12" />
                {/* <InputField placeholder="Issuer Digital Signature" name="issuerDigitalSignature" value={formData.issuerDigitalSignature} onChange={handleInputChange} span="12" /> */}
                <InputField placeholder="Invoice Currency Code" name="invoiceCurrencyCode" value={formData.invoiceCurrencyCode} onChange={handleInputChange} span="12" />
                {/* <InputField placeholder="Currency Exchange Rate" name="currencyExchangeRate" value={formData.currencyExchangeRate} onChange={handleInputChange} span="12" /> */}
                <InputField placeholder="Total Excluding Tax" name="totalExcludingTax" value={formData.totalExcludingTax} onChange={handleInputChange} span="12" />
                <InputField placeholder="Total Including Tax" name="totalIncludingTax" value={formData.totalIncludingTax} onChange={handleInputChange} span="12" />
                <InputField placeholder="Total Payable Amount" name="totalPayableAmount" value={formData.totalPayableAmount} onChange={handleInputChange} span="12" />
                <InputField placeholder="Total Net Amount" name="totalNetAmount" value={formData.totalNetAmount} onChange={handleInputChange} span="12" />
                <InputField placeholder="Total Discount Value" name="totalDiscountValue" value={formData.totalDiscountValue} onChange={handleInputChange} span="12" />
                {/* <InputField placeholder="Total Fee Charge Amount" name="totalFeeChargeAmount" value={formData.totalFeeChargeAmount} onChange={handleInputChange} span="12" /> */}
                <InputField placeholder="Total Tax Amount" name="totalTaxAmount" value={formData.totalTaxAmount} onChange={handleInputChange} span="12" />
                {/* <InputField placeholder="Rounding Amount" name="roundingAmount" value={formData.roundingAmount} onChange={handleInputChange} span="12" /> */}
                {/* <InputField placeholder="Total Taxable Amount Per Tax Type" name="totalTaxableAmountPerTaxType" value={formData.totalTaxableAmountPerTaxType} onChange={handleInputChange} span="12" /> */}
                {/* <InputField placeholder="Total Tax Amount Per Tax Type" name="totalTaxAmountPerTaxType" value={formData.totalTaxAmountPerTaxType} onChange={handleInputChange} span="12" /> */}
                <SelectField placeholder="Tax Type" name="taxType" value={formData.taxType} options={taxType()} onChange={(value) => handleSelectChange('taxType', value)} span="12" />
                {/* <InputField placeholder="Invoice Additional Discount Amount" name="invoiceAdditionalDiscountAmount" value={formData.invoiceAdditionalDiscountAmount} onChange={handleInputChange} span="12" /> */}
                {/* <InputField placeholder="Invoice Additional Fee Amount" name="invoiceAdditionalFeeAmount" value={formData.invoiceAdditionalFeeAmount} onChange={handleInputChange} span="12" /> */}
                {/* <InputField placeholder="Reference Number Of Customs Form No" name="referenceNumberOfCustomsFormNo1_9Etc" value={formData.referenceNumberOfCustomsFormNo1_9Etc} onChange={handleInputChange} span="12" /> */}
            </Row>
        </>
    );

    const supplierFields = () => (
        <>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <InputField placeholder="Supplier Name" name="supplierName" value={formData.supplierName} onChange={handleInputChange} span="12" />
                <InputField placeholder="Supplier TIN" name="supplierTin" value={formData.supplierTin} onChange={handleInputChange} span="12" />
                <InputField placeholder="Supplier Registration" name="supplierRegistration" value={formData.supplierRegistration} onChange={handleInputChange} span="12" />
                <InputField placeholder="Supplier Email" name="supplierEmail" value={formData.supplierEmail} onChange={handleInputChange} span="12" />
                <InputField placeholder="Supplier MSIC Code" name="supplierMalaysiaStandardIndustrialClassificationMsicCode" value={formData.supplierMalaysiaStandardIndustrialClassificationMsicCode} onChange={handleInputChange} span="12" />
                <InputField placeholder="Supplier Business Activity Description" name="supplierBusinessActivityDescription" value={formData.supplierBusinessActivityDescription} onChange={handleInputChange} span="12" />
                <InputField placeholder="Address Line 0" name="supplierAddressLine0" value={formData.supplierAddressLine0} onChange={handleInputChange} span="12" />
                <InputField placeholder="City Name" name="supplierCityName" value={formData.supplierCityName} onChange={handleInputChange} span="12" />
                <SelectField placeholder="State" name="supplierState" value={formData.supplierState} options={state()} onChange={(value) => handleSelectChange('supplierState', value)} span="12" />
                <SelectField placeholder="Country" name="supplierCountry" value={formData.supplierCountry} options={country()} onChange={(value) => handleSelectChange('supplierCountry', value)} span="12" />
                <InputField placeholder="Supplier Contact Number" name="supplierContactNumber" value={formData.supplierContactNumber} onChange={handleInputChange} span="12" />
                {/* <InputField placeholder="Supplier Bank Account Number" name="supplierBankAccountNumber" value={formData.supplierBankAccountNumber} onChange={handleInputChange} span="12" /> */}
            </Row>
        </>
    );

    const buyerFields = () => (
        <>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <InputField placeholder="Buyer Name" name="buyerName" value={formData.buyerName} onChange={handleInputChange} span="12" />
                <InputField placeholder="Buyer TIN" name="buyerTin" value={formData.buyerTin} onChange={handleInputChange} span="12" />
                <InputField placeholder="Buyer Registration" name="buyerRegistration" value={formData.buyerRegistration} onChange={handleInputChange} span="12" />
                <InputField placeholder="Buyer SST Registration Number" name="buyerSstRegistrationNumber" value={formData.buyerSstRegistrationNumber} onChange={handleInputChange} span="12" />
                <InputField placeholder="Address Line 0" name="buyerAddressLine0" value={formData.buyerAddressLine0} onChange={handleInputChange} span="12" />
                <InputField placeholder="City Name" name="buyerCityName" value={formData.buyerCityName} onChange={handleInputChange} span="12" />
                <SelectField placeholder="State" name="buyerState" value={formData.buyerState} options={state()} onChange={(value) => handleSelectChange('supplierState', value)} span="12" />
                <SelectField placeholder="Country" name="buyerCountry" value={formData.buyerCountry} options={country()} onChange={(value) => handleSelectChange('supplierCountry', value)} span="12" />
                <InputField placeholder="Buyer Contact Number" name="buyerContactNumber" value={formData.buyerContactNumber} onChange={handleInputChange} span="12" />
            </Row>
        </>
    );

    const lineItems = () => (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>U/Price</th>
                        <th>Amt</th>
                        <th>Disc</th>
                        <th>Tax</th>
                        <th>Net Amt</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.items.map((item, index) => (
                        <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.Description}</td>
                                <td>{item.Qty}</td>
                                <td>{item["U/Price"]}</td>
                                <td>{item.Amt}</td>
                                <td>{item.Disc}</td>
                                <td>{item.Tax}</td>
                                <td>{item["Net Amt"]}</td>
                            </tr>
                        </>
                    ))}
                    <tr>
                        <th colSpan={7} style={{ textAlign: 'right', paddingRight: '100px' }}>Subtotal</th>
                        <th colSpan={1} style={{ textAlign: 'left' }}>{formData.subTotal}</th>
                    </tr>
                    <tr>
                        <th colSpan={7} style={{ textAlign: 'right', paddingRight: '100px' }}>Service Tax</th>
                        <th colSpan={1} style={{ textAlign: 'left' }}>{formData.totalTaxAmount}</th>
                    </tr>
                    <tr>
                        <th colSpan={7} style={{ textAlign: 'right', paddingRight: '100px' }}>Discount</th>
                        <th colSpan={1} style={{ textAlign: 'left' }}>{formData.totalDiscountValue}</th>
                    </tr>
                    <tr>
                        <th colSpan={7} style={{ textAlign: 'right', paddingRight: '100px' }}>Total</th>
                        <th colSpan={1} style={{ textAlign: 'left' }}>{formData.totalNetAmount}</th>
                    </tr>
                </tbody>
            </table>
        </>
    );

    const getItems = (panelStyle) => [
        {
            key: '1',
            label: 'Invoice Details',
            children: <p>{invoiceFields()}</p>,
            style: panelStyle,
        },
        {
            key: '2',
            label: 'Supplier Details',
            children: <p>{supplierFields()}</p>,
            style: panelStyle,
        },
        {
            key: '3',
            label: 'Buyer Details',
            children: <p>{buyerFields()}</p>,
            style: panelStyle,
        },
        {
            key: '4',
            label: 'Line Items',
            children: <p>{lineItems()}</p>,
            style: panelStyle,
        },
    ];

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 20,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const saveInvoice = {
            headers: {
                supplier: {
                    supplierName: formData.supplierName,
                    supplierTin: formData.supplierTin,
                    supplierRegistration: formData.supplierRegistration,
                    supplierEmail: formData.supplierEmail,
                    supplierMalaysiaStandardIndustrialClassificationMsicCode: formData.supplierMalaysiaStandardIndustrialClassificationMsicCode,
                    supplierBusinessActivityDescription: formData.supplierBusinessActivityDescription,
                    supplierAddress: {
                        addressLine0: formData.supplierAddressLine0,
                        addressLine1: formData.supplierAddressLine1,
                        addressLine2: formData.supplierAddressLine2,
                        postalZone: formData.supplierPostalZone,
                        cityName: formData.supplierCityName,
                        state: formData.supplierState,
                        country: formData.supplierCountry
                    },
                    supplierContactNumber: formData.supplierContactNumber
                },
                buyer: {
                    buyerName: formData.buyerName,
                    buyerTin: formData.buyerTin,
                    buyerRegistration: formData.buyerRegistration,
                    buyerSstRegistrationNumber: formData.buyerSstRegistrationNumber,
                    buyerEmail: formData.buyerEmail,
                    buyerAddress: {
                        addressLine0: formData.buyerAddressLine0,
                        addressLine1: formData.buyerAddressLine1,
                        addressLine2: formData.buyerAddressLine2,
                        postalZone: formData.buyerPostalZone,
                        cityName: formData.buyerCityName,
                        state: formData.buyerState,
                        country: formData.buyerCountry
                    },
                    buyerContactNumber: formData.buyerContactNumber
                },
                eInvoiceVersion: formData.eInvoiceVersion,
                eInvoiceTypeCode: formData.eInvoiceTypeCode,
                eInvoiceCodeNumber: formData.eInvoiceCodeNumber,
                eInvoiceTime: formData.eInvoiceTime,
                issuerDigitalSignature: formData.issuerDigitalSignature,
                invoiceCurrencyCode: formData.invoiceCurrencyCode,
                totalExcludingTax: formData.totalExcludingTax,
                totalIncludingTax: formData.totalIncludingTax,
                totalPayableAmount: formData.totalPayableAmount,
                totalNetAmount: formData.totalNetAmount,
                totalDiscountValue: formData.totalDiscountValue,
                totalFeeChargeAmount: formData.totalFeeChargeAmount,
                totalTaxAmount: formData.totalTaxAmount,
                roundingAmount: formData.roundingAmount,
                totalTaxableAmountPerTaxType: formData.totalTaxableAmountPerTaxType,
                totalTaxAmountPerTaxType: formData.totalTaxAmountPerTaxType,
                taxType: formData.taxType
            },
            lines: formData.items.map(item => ({
                classification: item.classification || '022',
                descriptionOfProductOrService: item.Description,
                unitPrice: item['U/Price'],
                taxType: item.taxType,
                quantity: item.Qty,
                taxRate: item.taxRate,
                taxAmount: item.Amt,
                subtotal: (item.Qty * item.Amt),
                itemTax: item.Tax,
                totalExcludingTax: item['Net Amt'],
                countryOfOrigin: item.countryOfOrigin || 'MYS'
            }))
        };
        const savePdf = {
            eInvoiceCodeNumber: formData.eInvoiceCodeNumber,
            invoicePdfEncode: formData.invoicePdfEncode,
        }
        try {
            const response = await axios.post('https://4.240.73.173:8087/save-invoice', saveInvoice);
            console.log('Form data submitted successfully:', response.data);
    
            // After the first API call succeeds, call the second API
            const pdfResponse = await axios.post('https://4.240.73.173:8087/save-invoice-pdf', savePdf);
            console.log('PDF data submitted successfully:', pdfResponse.data);
    
            // Further processing can be done here, like showing a success message
            console.log(JSON.stringify(saveInvoice, null, 2));
            navigate('/submitted', { state: formData });
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (

        <div className="panel-container">
            <div className="panel left-panel">
                <h2>Preview</h2>
                {file && (
                    <Document
                        file={file}
                        onLoadSuccess={handleLoadSuccess}
                        className="react-pdf__Document"
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1} width={600}
                                className="react-pdf__Page"
                            />
                        ))}
                    </Document>
                )}
                <div className="extract-button-container">
                    <button onClick={handleExtractClick} className="extract-button">
                        Extract
                    </button>
                </div>
            </div>
            {showForm && (
                <div className="panel right-panel">
                    <h2>Invoice Details</h2>
                    <form onSubmit={handleSubmit}>
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            style={{
                                background: token.colorBgContainer,
                            }}
                            items={getItems(panelStyle)}
                        />
                        <div className="extract-button-container">
                            <button type='submit' className="extract-button">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>

    );

};

export default Panel;