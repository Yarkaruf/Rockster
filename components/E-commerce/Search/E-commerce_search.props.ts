import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface EcommerceSearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    setValue: any;
    value: any;
    searchTable: any;
}