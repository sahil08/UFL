import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import LEAD_OBJECT from '@salesforce/schema/Lead';
import Name_FIELD from '@salesforce/schema/Lead.Name';
import Phone_FIELD from '@salesforce/schema/Lead.Phone';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import ADDRESS_FIELD from '@salesforce/schema/Lead.Address';
import AMOUNT__FIELD from '@salesforce/schema/Lead.Amount__c';
import DOB__FIELD from '@salesforce/schema/Lead.Date_of_Birth__c';
import IDTYPE__FIELD from '@salesforce/schema/Lead.Type_of_ID__c';
import ID__FIELD from '@salesforce/schema/Lead.ID_Number__c';
import Company__FIELD from '@salesforce/schema/Lead.Company';

/**
 * Creates Account records.
 */
export default class AccountCreator extends LightningElement {

    leadObject = LEAD_OBJECT;
    leadRequestFields = [Name_FIELD,Phone_FIELD,DOB__FIELD, EMAIL_FIELD,ADDRESS_FIELD,AMOUNT__FIELD,
                        IDTYPE__FIELD,ID__FIELD,Company__FIELD];

    handleAccountCreated(){
        const event = new ShowToastEvent({
            title: 'Form submitted Successfully',
            variant: 'success',
            message: 'We have recieved your loan application, our team will reach out you',
        });
        this.dispatchEvent(event);
        // Run code when account is created.
    }
}