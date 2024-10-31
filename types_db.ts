export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

// export interface Database {
//     public: {
//         Tables: {
//             Customers: {
//                 Row: {
//                     id: string
//                     customer_id: string | null
//                 }
//             }
//         }
//     }
// }