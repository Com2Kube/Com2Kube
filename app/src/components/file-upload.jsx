import React from 'react'

export const FileUpload = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col" style="text-align: center;">
                    <form action="http://c2k.canadacentral.cloudapp.azure.com:5000" method="POST" enctype="multipart/form-data">
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <input id="input" type="file" name="file" />
                        <br>
                        <br>
                        <br>
                        <button type="submit" class="btn btn-dark">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}