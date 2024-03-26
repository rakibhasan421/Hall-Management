export interface StudentInfo {
    studentId: string;
    studentName: string;
    contactNo: string;
    studentEmail: string;
    studentFatherName: string;
    studentMotherName: string;
    studentRoll: string;
    studentReg: string;
    session: string;
    lavel: string;
    departmentId: string;
    department: string;
    permanentAddress: string;
    residentiality: boolean;
}

export interface ProvostInfo {
    provostId: string;
    image: string;
    provostName: string;
    contactNo: string;
    provostEmail: string;
    provostDesignation: string;
    provostDepartment: string;
    provostTenune: string;
    isCurrent: boolean;

}

export interface HouseTutorInfo {
    tutorId: string;
    image: string;
    tutorName: string;
    contactNo: string;
    tutorEmail: string;
    tutorDesignation: string;
    tutorDepartment: string;
    tutorTenune: string;

}

export interface HallBodyInfo {
    hallBodyId: string;
    hallBodyName: string;
    contactNo: string;
    hallBodyEmail: string;
    hallBodyDesignation: string;
    hallBodyTenune: string;

}

export interface UserInfo {
    authenticId: string;
    email: string;
    password: string;
    userName: string;
}

export interface UserLogin {
    email: string;
    password: string;
    status: boolean;
}

export interface DepartmentInfo {
    departmentId: string;
    departmentTitle: string;
    descriptions: string;
}

export interface StudentLogin {
    rollNo: string;
    registrationNo: string;
}

export interface PaymentType {
    paymentTypeId: string;
    title: string;
    amount: number;
    descriptions: string;
}

export interface PaymentInfo {
    paymentInfoId: string;
    slipNo: string;
    dateTime: string;
    amount: number;
    paymentTypeId: string;
    studentId: string;
}

export interface StudentPaymentInfo {
    paymentType: string;
    slipNo: string;
    amount: number;
    dateTime: string;
}