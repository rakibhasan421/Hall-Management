import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid'
import { DepartmentInfo, HallBodyInfo, HouseTutorInfo, PaymentInfo, PaymentType, ProvostInfo, StudentInfo, StudentLogin, StudentPaymentInfo, UserInfo, UserLogin } from './models/hallManagement';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppConstant } from './config/app-constant';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HallManagementService {

    constructor(private http: HttpClient, private cookieService: CookieService) { }


    baseUrl = environment.serverUrl;

    getUserIdCookie() {
        return this.cookieService.get(AppConstant.AUTH_ID_KEY);
    }

    getUserAuthPassCookie() {
        return this.cookieService.get(AppConstant.AUTH_PASS_KEY);
    }

    setUserIdCookie(userId: string) {
        return this.cookieService.set(AppConstant.AUTH_ID_KEY, userId);
    }

    setUserAuthPassCookie(userAuth: string) {
        return this.cookieService.set(AppConstant.AUTH_PASS_KEY, userAuth);
    }

    setUserLoginCookieService(userId: string, userAuth: string) {
        this.setUserIdCookie(userId);
        this.setUserAuthPassCookie(userAuth);
    }

    clearCookie() {
        this.cookieService.deleteAll();
        this.cookieService.delete(AppConstant.AUTH_ID_KEY);
        this.cookieService.delete(AppConstant.AUTH_PASS_KEY);
    }
    generateUniqueId(): string {
        return uuidv4();
    }

    public userRegister(user: UserInfo): Observable<UserInfo> {
        // return of(user)
        // var url = '/web/auth/save-login-info';
        return this.http.post<UserInfo>(this.baseUrl + '/auth/save-login-info', user);
    }

    public userLogin(logininfo: UserLogin): Observable<UserLogin> {
        // return of(logininfo)
        return this.http.post<UserLogin>(this.baseUrl + '/auth/user-login', logininfo);
    }

    public studentLogin(logininfo: StudentLogin): Observable<StudentInfo> {
        // return of(logininfo)
        return this.http.post<StudentInfo>(this.baseUrl + '/hall-office/student-info', logininfo);
    }

    provostInfo: ProvostInfo =
        {
            provostId: "P001",
            image: "",
            provostName: "Rakib Hasan",
            contactNo: "01752709413",
            provostEmail: "rakibsobuz@gmail.com",
            provostDesignation: "Professor",
            provostDepartment: "ICT",
            provostTenune: "12-12-24",
            isCurrent: true
        }

    public getProvostInfo(): Observable<ProvostInfo> {
        // return of(this.provostInfo);
        return this.http.get<ProvostInfo>(this.baseUrl + '/hall-office/current-provost');
    }

    provostInfoList: ProvostInfo[] = [
        {
            provostId: "P002",
            image: "",
            provostName: "Sobuz",
            contactNo: "01752709413",
            provostEmail: "rakibsobuz@gmail.com",
            provostDesignation: "Professor",
            provostDepartment: "ICT",
            provostTenune: "12-12-24",
            isCurrent: false
        },
        {
            provostId: "P005",
            image: "",
            provostName: "Rakib",
            contactNo: "01752709413",
            provostEmail: "rakibsobuz@gmail.com",
            provostDesignation: "Professor",
            provostDepartment: "ICT",
            provostTenune: "12-12-24",
            isCurrent: false
        },
        {
            provostId: "P004",
            image: "",
            provostName: "Hasan",
            contactNo: "01752709413",
            provostEmail: "rakibsobuz@gmail.com",
            provostDesignation: "Professor",
            provostDepartment: "ICT",
            provostTenune: "12-12-24",
            isCurrent: false
        }
    ]

    public getProvostInfoList(): Observable<ProvostInfo[]> {
        // return of(this.provostInfoList);
        return this.http.get<ProvostInfo[]>(this.baseUrl + '/hall-office/get-provost-list');
    }

    public updateProvostInfo(provost: ProvostInfo): Observable<ProvostInfo> {
        // return of(provost)
        return this.http.post<ProvostInfo>(this.baseUrl + '/hall-office/add-provost', provost);
    }

    houseTutorInfo: HouseTutorInfo[] = [
        {
            tutorId: "P001",
            image: "",
            tutorName: "Rakib",
            contactNo: "01752709413",
            tutorEmail: "rakibsobuz@gmail.com",
            tutorDesignation: "Professor",
            tutorDepartment: "ICT",
            tutorTenune: "12-12-24"
        },
        {
            tutorId: "P002",
            image: "",
            tutorName: "Hasan",
            contactNo: "01521493608",
            tutorEmail: "hasan@gmail.com",
            tutorDesignation: "Lecturer",
            tutorDepartment: "ICT",
            tutorTenune: "12-12-24"
        },
        {
            tutorId: "P003",
            image: "",
            tutorName: "Sobuj",
            contactNo: "01934239180",
            tutorEmail: "sobuz@gmail.com",
            tutorDesignation: " Assistant Professor",
            tutorDepartment: "CSE",
            tutorTenune: "12-12-24"
        }
    ]

    public getHouseTutorInfo(): Observable<HouseTutorInfo[]> {
        // return of(this.houseTutorInfo);
        return this.http.get<HouseTutorInfo[]>(this.baseUrl + '/hall-office/get-tutor-list');
    }

    public updateHouseTutorInfo(tutor: HouseTutorInfo): Observable<HouseTutorInfo> {
        // return of(tutor)
        return this.http.post<HouseTutorInfo>(this.baseUrl + '/hall-office/add-house-tutor', tutor);
    }

    studentInfoList: StudentInfo[] = [
        {
            studentId: "S001",
            studentName: "Anamul",
            contactNo: "01234545646",
            studentEmail: "anamul@gmail.com",
            studentFatherName: "AAA",
            studentMotherName: "MMM",
            studentRoll: "1418001",
            studentReg: "1316",
            session: "2014-15",
            lavel: "B.Sc.",
            departmentId: "",
            department: "ICT",
            permanentAddress: "Halsa",
            residentiality: true
        },
        {
            studentId: "S002",
            studentName: "Raju",
            contactNo: "02435355453",
            studentEmail: "raju@gmail.com",
            studentFatherName: "RRR",
            studentMotherName: "MMM",
            studentRoll: "1418002",
            studentReg: "1317",
            session: "2014-15",
            lavel: "B.Sc.",
            departmentId: "",
            department: "ICT",
            permanentAddress: "Hatia",
            residentiality: false
        },
        {
            studentId: "S003",
            studentName: "Rakib Hasan",
            contactNo: "01303036180",
            studentEmail: "rakib@gmail.com",
            studentFatherName: "SSS",
            studentMotherName: "RRR",
            studentRoll: "1418003",
            studentReg: "1318",
            session: "2014-15",
            lavel: "B.Sc.",
            departmentId: "",
            department: "ICT",
            permanentAddress: "Meherpur",
            residentiality: true
        }

    ]

    public getStudentInfoList(): Observable<StudentInfo[]> {
        // return of(this.studentInfoList);
        return this.http.get<StudentInfo[]>(this.baseUrl + '/hall-office/get-student-list');
    }

    public updateStudentInfo(student: StudentInfo): Observable<StudentInfo> {
        // return of(student)
        return this.http.post<StudentInfo>(this.baseUrl + '/hall-office/add-student', student);
    }

    departmentList: DepartmentInfo[] = [
        {
            departmentId: "",
            departmentTitle: "ICT",
            descriptions: "",
        },
        {
            departmentId: "",
            departmentTitle: "CSE",
            descriptions: "",
        },
        {
            departmentId: "",
            departmentTitle: "EEE",
            descriptions: "",
        },
        {
            departmentId: "",
            departmentTitle: "BME",
            descriptions: "",
        }
    ]

    public getDepartmentList(): Observable<DepartmentInfo[]> {
        // return of(this.departmentList);
        return this.http.get<DepartmentInfo[]>(this.baseUrl + '/department/get-info');
    }

    public saveDepartment(department: DepartmentInfo): Observable<DepartmentInfo> {
        // return of(department)
        return this.http.post<DepartmentInfo>(this.baseUrl + '/department/add-info', department);
    }

    hallBodyInfoList: HallBodyInfo[] = [
        {
            hallBodyId: "P001",
            hallBodyName: "Rakib",
            contactNo: "01752709413",
            hallBodyEmail: "rakibsobuz@gmail.com",
            hallBodyDesignation: "Register",
            hallBodyTenune: "12-12-24"
        },
        {
            hallBodyId: "P002",
            hallBodyName: "Hasan",
            contactNo: "01521493608",
            hallBodyEmail: "hasan@gmail.com",
            hallBodyDesignation: "Store Keeper",
            hallBodyTenune: "12-12-24"
        },
        {
            hallBodyId: "P003",
            hallBodyName: "Sobuj",
            contactNo: "01934239180",
            hallBodyEmail: "sobuz@gmail.com",
            hallBodyDesignation: "Assistant Register",
            hallBodyTenune: "12-12-24"
        }
    ]


    public getHallBodyInfo(): Observable<HallBodyInfo[]> {
        // return of(this.hallBodyInfoList);
        return this.http.get<HallBodyInfo[]>(this.baseUrl + '/hall-office/get-hall-body-list');
    }

    public updateHallBodyInfo(hallbody: HallBodyInfo): Observable<HallBodyInfo> {
        // return of(hallbody)
        return this.http.post<HallBodyInfo>(this.baseUrl + '/hall-office/add-hall-body', hallbody);
    }
    public savePaymentType(payment: PaymentType): Observable<PaymentType> {
        // return of(payment)
        return this.http.post<PaymentType>(this.baseUrl + '/payment/add-payment-type', payment);
    }

    public getPaymentTypeList(): Observable<PaymentType[]> {
        // return of(payment)
        return this.http.get<PaymentType[]>(this.baseUrl + '/payment/payment-type-list');
    }

    public savedPaymentInfo(payment: PaymentInfo): Observable<PaymentInfo> {
        // return of(payment)
        return this.http.post<PaymentInfo>(this.baseUrl + '/payment/save-payment-info', payment);
    }

    public getStudentPaymentInfo(studentId: string): Observable<StudentPaymentInfo[]> {
        // return of(payment)
        return this.http.post<StudentPaymentInfo[]>(this.baseUrl + '/payment/student-payment-info', studentId);
    }


}
