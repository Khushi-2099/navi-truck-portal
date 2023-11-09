export interface UserCart {
    userName: string;
    applicationId: string | number;
    variant: VehicleDetails[];
}

export interface VehicleDetails {
    variantName: string;
    servicePackageCost: number;
    milegePackageCost: number;
    color: string;
    accessoriesCost: number;
    tenureInMonths: number;  
    selectedVariant: string;
    EMI: number;
    quantity: number;
}