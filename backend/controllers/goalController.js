const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Prviate
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'GET goals from func'})
})


// @desc    Set goal
// @route   POST /api/goals
// @access  Prviate
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')

    }

    res.status(200).json({message: 'SET goal'})
})


// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Prviate
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})


// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Prviate
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}