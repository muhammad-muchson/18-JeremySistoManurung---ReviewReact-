import React from 'react'

export const Stress = ({forms,deleteForm}) => {

        return forms.map(Cform=>( 
        <tr key={Cform}>
                <p>Firstname: {Cform.firtsname}</p>
                <p>Title : {Cform.title}</p>
                <p>Pnumber : {Cform.Pnumber}</p>
                <p>National : {Cform.national}</p>
                <p>Pesan : {Cform.Ppesan}</p>
                <p>Author : {Cform.author}</p>
                <p className='delete-btn' onClick={()=>deleteForm(Cform.isbn)}>
        </p>           
        </tr>            

))
}
