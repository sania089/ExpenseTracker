const IncomeSchema= require("../models/IncomeModel")


exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date}  = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        
        if (!title) {
            return res.status(400).json({ message: 'Title is required!' });
        }
        console.log('title')
        
        if (!category) {
            return res.status(400).json({ message: 'Category is required!' });
        }
    
        if (!description) {
            return res.status(400).json({ message: 'Description is required!' });
        }
    
        if (!date) {
            return res.status(400).json({ message: 'Date is required!' });
        }
        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }
        await income.save();
    
        res.status(200).json({ message: 'Income Added' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
    
    console.log(income)
}
exports.getIncomes = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}