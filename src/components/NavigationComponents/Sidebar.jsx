import { Stack } from '@mui/material';
import { categories } from '../../utilities/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack direction='row'
        sx={{
            overflowY: 'auto',
            flexDirection: { md: 'column' },
            height: { sx: 'auto', md: '95%' }
        }}>
        {categories.map((category) => (
            <button
                onClick={() => setSelectedCategory(category.name)}
                key={category.name}
                className='category-btn'
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                    color: 'white'
                }}>
                <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar