import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface EcommerceSearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    data: any;
    //Поменять
    setValue: any;
    value: any;
    searchTable: any;
}