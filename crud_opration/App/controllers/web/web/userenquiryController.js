const EnquiryModel = require("../../web/web/models/EnquiryModel")
let enquiryInsert = (req, res) => {
    let { name, email, phone, message } = req.body;

    let enquiry=new EnquiryModel({
        name,
        email,
        phone,
        message
    });

    enquiry.save()
    .then(() => {
        res.status(201).json({ status: 1, message: "Enquiry saved successfully" });
    })
    .catch((err) => {
        res.status(500).json({ status: 0, message: "Error while saving enquiry", error: err.message });
    });
};

let enquiryList = async (req, res) => {
    try {
        let enquiryList = await EnquiryModel.find();
        res.status(200).json({ status: 1, message: "Enquiry list", data: enquiryList });
    } catch (err) {
        res.status(500).json({ status: 0, message: "Error fetching enquiry list", error: err.message });
    }
};

let enquiryDelete = async (req, res) => {
    try {
        let enquiryId = req.params.id;
        let deleteEnquiry = await EnquiryModel.deleteOne({ _id: enquiryId });
        res.status(200).json({ status: 1, message: "Enquiry deleted", data: deleteEnquiry });
    } catch (err) {
        res.status(500).json({ status: 0, message: "Error deleting enquiry", error: err.message });
    }
};

module.exports = { enquiryInsert, enquiryList, enquiryDelete };
